const javascrypt = require('./javascrypt.js');
const fs = require('fs');

[node, script, direction, archiveName, cipherfileName, password] = process.argv;

if (direction == 'e') {
  const plaintext = fs.readFileSync(archiveName).toString('hex');
  const ciphertext = javascrypt.encrypt(plaintext, password, true);
  fs.writeFileSync(cipherfileName, ciphertext);
} else if (direction == 'd') {
  const ciphertext = fs.readFileSync(cipherfileName, 'utf-8');
  const plaintext = javascrypt.decrypt(ciphertext, password, true);
  fs.writeFileSync(archiveName, Buffer.from(plaintext, 'hex'));
}
