const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create certificates directory if it doesn't exist
const certsDir = path.join(__dirname, 'certificates');
if (!fs.existsSync(certsDir)) {
  fs.mkdirSync(certsDir, { recursive: true });
  console.log('Created certificates directory');
}

try {
  // Check if mkcert is installed
  try {
    execSync('mkcert -version', { stdio: 'inherit' });
    console.log('mkcert is installed');
  } catch (error) {
    console.error('mkcert is not installed. Please install it first:');
    console.log('- macOS: brew install mkcert');
    console.log('- Windows: choco install mkcert');
    console.log('- Linux: Follow instructions at https://github.com/FiloSottile/mkcert#linux');
    process.exit(1);
  }

  // Install local CA if needed
  execSync('mkcert -install', { stdio: 'inherit' });
  console.log('Local CA installed');

  // Generate certificates for localhost
  const keyPath = path.join(certsDir, 'localhost-key.pem');
  const certPath = path.join(certsDir, 'localhost.pem');
  
  execSync(`mkcert -key-file ${keyPath} -cert-file ${certPath} localhost 127.0.0.1 ::1`, {
    stdio: 'inherit',
  });
  
  console.log(`Certificates generated at ${certsDir}`);
  console.log('You can now run the server with HTTPS enabled');
} catch (error) {
  console.error('Error generating certificates:', error);
  process.exit(1);
} 