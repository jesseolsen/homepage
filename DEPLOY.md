# Deployment Guide

This project automatically deploys to `jesse.olsen.org` via FTP.

## Quick Start

### First Time Setup

1. Set your FTP password as an environment variable:
   ```bash
   export FTP_PASSWORD="your_ftp_password_here"
   ```

2. Deploy to jesse.olsen.org:
   ```bash
   npm run deploy
   ```

## Deployment Methods

### Method 1: Bash Script (Recommended)
```bash
npm run deploy
```

This uses the native `ftp` command and is the most reliable method.

### Method 2: Node.js Script
```bash
npm run deploy:node
```

This uses the Node.js `ftp` package for more control.

## How It Works

1. **Build**: Creates an optimized production build in the `build/` directory
2. **Connect**: Establishes FTP connection to `ftp.olsen.org`
3. **Upload**: Recursively uploads all files to `/public_html` directory
4. **Done**: Your changes are live on `jesse.olsen.org`

## Configuration

**FTP Server Details:**
- Host: `ftp.olsen.org`
- User: `jesse.olsen@jesse.olsen.org`
- Port: `21`
- Remote Directory: `/public_html`

**Environment Variables:**
- `FTP_PASSWORD`: Your FTP password (required for deployment)

## Troubleshooting

### "FTP_PASSWORD not set" error
Set the password before deploying:
```bash
export FTP_PASSWORD="your_password"
npm run deploy
```

### Connection timeout
- Check your internet connection
- Verify FTP credentials are correct
- Ensure your firewall allows port 21 (FTP)

### Build fails
```bash
npm install --legacy-peer-deps
npm run build
```

## Automation (Optional)

To automate deployments on GitHub push, create a `.github/workflows/deploy.yml`:

```yaml
name: Deploy to jesse.olsen.org

on:
  push:
    branches: [ master ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install --legacy-peer-deps
      - run: npm run build
      - name: Deploy via FTP
        env:
          FTP_PASSWORD: ${{ secrets.FTP_PASSWORD }}
        run: |
          apt-get update && apt-get install -y ncftp
          ncftpput -R -v -u jesse.olsen@jesse.olsen.org -p "$FTP_PASSWORD" ftp.olsen.org /public_html build/*
```

Then add your FTP password as a GitHub secret:
1. Go to repo Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `FTP_PASSWORD`, Value: your FTP password

## Support

For issues with deployment, check:
- FTP credentials in environment variables
- Build directory exists: `ls -la build/`
- Internet connection to FTP server
