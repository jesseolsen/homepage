# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Jesse Olsen's personal portfolio website built with React 17 and Create React App. The site displays resume information, portfolio projects, and testimonials in a single-page application format.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (port 3000)
npm start

# Run tests
npm test

# Build for production
npm run build

# Deploy to production (requires FTP_PASSWORD env var)
export FTP_PASSWORD="your_password"
npm run deploy
```

## Architecture

### Data Flow
- The application loads resume data from `/public/resumeData.json` via AJAX on mount
- Main App component (`src/App.js`) fetches data and distributes to child components via props
- Components render different sections: Header, About, Resume, Portfolio, Testimonials, Footer

### Technology Stack
- **Frontend**: React 17, jQuery (for AJAX), styled-components
- **UI Framework**: Grommet v2 with Grommet Icons
- **Analytics**: Google Analytics via react-ga
- **Build Tool**: react-scripts 5.0.1
- **Code Quality**: Prettier with lint-staged pre-commit hooks
- **Deployment**: FTP upload to jesse.olsen.org via custom bash script

### Component Structure
All components are in `src/Components/`:
- Class-based React components
- Each component receives data props from App.js
- Components render specific sections based on resumeData.json content

### Deployment Process
The `deploy.sh` script:
1. Runs production build (`npm run build`)
2. Uploads build directory to FTP server (ftp.olsen.org)
3. Supports ncftpput, lftp, or native ftp commands
4. Site is served from https://jesse.olsen.org