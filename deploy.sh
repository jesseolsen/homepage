#!/bin/bash

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# FTP Configuration
FTP_HOST="ftp.olsen.org"
FTP_USER="jesse.olsen@jesse.olsen.org"
FTP_PASS="${FTP_PASSWORD}"
REMOTE_DIR="/"
BUILD_DIR="./build"

# Check if FTP password is set
if [ -z "$FTP_PASSWORD" ]; then
  echo -e "${RED}Error: FTP_PASSWORD environment variable not set${NC}"
  echo "Set it with: export FTP_PASSWORD=\"your_password\""
  exit 1
fi

echo -e "${BLUE}🔨 Building homepage...${NC}"
npm run build
if [ $? -ne 0 ]; then
  echo -e "${RED}❌ Build failed${NC}"
  exit 1
fi
echo -e "${GREEN}✅ Build complete${NC}\n"

if [ ! -d "$BUILD_DIR" ]; then
  echo -e "${RED}❌ Build directory not found: $BUILD_DIR${NC}"
  exit 1
fi

# Check if ncftpput is available, otherwise use lftp
if command -v ncftpput &> /dev/null; then
  echo -e "${BLUE}🔐 Uploading via ncftpput to $FTP_HOST...${NC}\n"
  ncftpput -R -v -u "$FTP_USER" -p "$FTP_PASS" "$FTP_HOST" "$REMOTE_DIR" "$BUILD_DIR"/*
  FTP_RESULT=$?
elif command -v lftp &> /dev/null; then
  echo -e "${BLUE}🔐 Uploading via lftp to $FTP_HOST...${NC}\n"
  lftp -u "$FTP_USER","$FTP_PASS" "$FTP_HOST" << EOLFTP
set ftp:ssl-allow no
mirror -R "$BUILD_DIR" "$REMOTE_DIR"
quit
EOLFTP
  FTP_RESULT=$?
else
  echo -e "${YELLOW}⚠️  ncftpput and lftp not found. Install with: brew install ncftp lftp${NC}"
  echo -e "${BLUE}🔐 Falling back to native ftp command...${NC}\n"

  # Use native ftp command
  FTP_SCRIPT=$(mktemp)
  cat > "$FTP_SCRIPT" << EOLFTP
open $FTP_HOST
$FTP_USER
$FTP_PASS
cd $REMOTE_DIR
binary
mput $BUILD_DIR/*
quit
EOLFTP

  ftp -n -i < "$FTP_SCRIPT"
  FTP_RESULT=$?
  rm -f "$FTP_SCRIPT"
fi

if [ $FTP_RESULT -eq 0 ]; then
  echo -e "\n${GREEN}✅ Deployment complete!${NC}"
  echo -e "${GREEN}✅ Your changes are live at https://jesse.olsen.org${NC}"
  exit 0
else
  echo -e "\n${RED}❌ FTP upload failed (exit code: $FTP_RESULT)${NC}"
  exit 1
fi
