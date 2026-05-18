const Client = require('ftp');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const FTP_CONFIG = {
  host: 'ftp.olsen.org',
  user: 'jesse.olsen@jesse.olsen.org',
  password: process.env.FTP_PASSWORD,
  port: 21,
};

const BUILD_DIR = path.join(__dirname, 'build');
const REMOTE_DIR = '/public_html';

// Validate FTP password is set
if (!FTP_CONFIG.password) {
  console.error('Error: FTP_PASSWORD environment variable not set');
  console.error('Set it with: export FTP_PASSWORD="your_password"');
  process.exit(1);
}

console.log('🔨 Building homepage...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build complete\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

if (!fs.existsSync(BUILD_DIR)) {
  console.error('❌ Build directory not found:', BUILD_DIR);
  process.exit(1);
}

const client = new Client();

function uploadDirectory(localDir, remoteDir, callback) {
  const files = fs.readdirSync(localDir);
  let completed = 0;

  if (files.length === 0) {
    callback();
    return;
  }

  files.forEach((file) => {
    const localPath = path.join(localDir, file);
    const remotePath = `${remoteDir}/${file}`;
    const stats = fs.statSync(localPath);

    if (stats.isDirectory()) {
      console.log(`📁 Creating directory: ${remotePath}`);
      client.mkdir(remotePath, true, (err) => {
        if (err && err.code !== 550) {
          console.error(`❌ Failed to create directory ${remotePath}:`, err.message);
        }
        uploadDirectory(localPath, remotePath, () => {
          completed++;
          if (completed === files.length) {
            callback();
          }
        });
      });
    } else {
      const readStream = fs.createReadStream(localPath);
      console.log(`📤 Uploading: ${remotePath}`);
      client.put(readStream, remotePath, (err) => {
        if (err) {
          console.error(`❌ Failed to upload ${remotePath}:`, err.message);
        } else {
          console.log(`✅ Uploaded: ${remotePath}`);
        }
        completed++;
        if (completed === files.length) {
          callback();
        }
      });
    }
  });
}

client.on('ready', () => {
  console.log(`📡 Connected to ${FTP_CONFIG.host}\n`);

  // Change to public_html directory
  client.cwd(REMOTE_DIR, (err) => {
    if (err) {
      console.error(`❌ Failed to change to ${REMOTE_DIR}:`, err.message);
      client.end();
      process.exit(1);
    }

    console.log(`🚀 Uploading files to ${REMOTE_DIR}...\n`);

    uploadDirectory(BUILD_DIR, REMOTE_DIR, () => {
      console.log('\n✅ Deployment complete!');
      client.end();
    });
  });
});

client.on('error', (err) => {
  console.error('❌ FTP Error:', err.message);
  process.exit(1);
});

client.on('close', () => {
  console.log('🔌 FTP connection closed');
});

console.log(`🔐 Connecting to FTP server: ${FTP_CONFIG.host}...\n`);
client.connect(FTP_CONFIG);
