const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const forge = require('node-forge');

// Create certificates directory if it doesn't exist
const certsDir = path.join(__dirname, 'certificates');
if (!fs.existsSync(certsDir)) {
  fs.mkdirSync(certsDir, { recursive: true });
  console.log('Created certificates directory');
}

try {
  console.log('Generating self-signed certificates...');
  
  // Generate a keypair
  const keys = forge.pki.rsa.generateKeyPair(2048);
  
  // Create a certificate
  const cert = forge.pki.createCertificate();
  cert.publicKey = keys.publicKey;
  
  // Set certificate details
  cert.serialNumber = '01';
  cert.validity.notBefore = new Date();
  cert.validity.notAfter = new Date();
  cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1);
  
  const attrs = [
    { name: 'commonName', value: 'localhost' },
    { name: 'countryName', value: 'US' },
    { name: 'organizationName', value: 'Mixcore Development' },
    { shortName: 'OU', value: 'Development' }
  ];
  
  cert.setSubject(attrs);
  cert.setIssuer(attrs);
  
  // Set extensions
  cert.setExtensions([
    {
      name: 'basicConstraints',
      cA: true
    },
    {
      name: 'keyUsage',
      keyCertSign: true,
      digitalSignature: true,
      nonRepudiation: true,
      keyEncipherment: true,
      dataEncipherment: true
    },
    {
      name: 'subjectAltName',
      altNames: [
        {
          type: 2, // DNS
          value: 'localhost'
        },
        {
          type: 7, // IP
          ip: '127.0.0.1'
        }
      ]
    }
  ]);
  
  // Self-sign the certificate
  cert.sign(keys.privateKey, forge.md.sha256.create());
  
  // Convert to PEM format
  const pemCert = forge.pki.certificateToPem(cert);
  const pemKey = forge.pki.privateKeyToPem(keys.privateKey);
  
  // Save to files
  const keyPath = path.join(certsDir, 'localhost-key.pem');
  const certPath = path.join(certsDir, 'localhost.pem');
  
  fs.writeFileSync(keyPath, pemKey);
  fs.writeFileSync(certPath, pemCert);
  
  console.log(`Certificates generated at ${certsDir}`);
  console.log('You can now run the server with HTTPS enabled');
  console.log('\nNOTE: Since these are self-signed certificates, your browser will show a security warning.');
  console.log('You will need to bypass this warning to access your local development site.');
} catch (error) {
  console.error('Error generating certificates:', error);
  console.log('\nInstall node-forge package with: npm install node-forge --save-dev');
  process.exit(1);
} 