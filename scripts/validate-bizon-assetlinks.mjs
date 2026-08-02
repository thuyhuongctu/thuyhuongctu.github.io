import fs from 'node:fs';

const packageName = 'vn.bizon.simulation';
const debugFingerprint = '90:1F:4E:09:2B:15:A9:3A:77:F7:A0:A0:AD:9E:5A:1D:5C:06:3B:ED:3A:D7:69:1A:05:13:AE:9D:8B:80:AD:06';
const document = JSON.parse(fs.readFileSync('.well-known/assetlinks.json', 'utf8'));
const fingerprintPattern = /^(?:[0-9A-F]{2}:){31}[0-9A-F]{2}$/;

if (!fs.existsSync('.nojekyll')) throw new Error('.nojekyll is required to publish .well-known on GitHub Pages.');
if (!Array.isArray(document) || document.length !== 1) throw new Error('Expected exactly one Digital Asset Links statement.');

const statement = document[0];
if (JSON.stringify(statement.relation) !== JSON.stringify(['delegate_permission/common.handle_all_urls'])) {
  throw new Error('Unexpected Digital Asset Links relation.');
}
if (statement?.target?.namespace !== 'android_app') throw new Error('Target namespace must be android_app.');
if (statement?.target?.package_name !== packageName) throw new Error(`Package must be ${packageName}.`);

const fingerprints = statement?.target?.sha256_cert_fingerprints;
if (!Array.isArray(fingerprints) || fingerprints.length < 1) throw new Error('At least one signing fingerprint is required.');
if (new Set(fingerprints).size !== fingerprints.length) throw new Error('Duplicate signing fingerprints are not allowed.');
for (const fingerprint of fingerprints) {
  if (!fingerprintPattern.test(fingerprint)) throw new Error(`Invalid SHA-256 fingerprint: ${fingerprint}`);
  if (/REPLACE|PLACEHOLDER|EXAMPLE/i.test(fingerprint)) throw new Error('Placeholder fingerprint is not allowed.');
}
if (!fingerprints.includes(debugFingerprint)) throw new Error('The currently distributed debug certificate must remain associated until retired explicitly.');

console.log(`Digital Asset Links contract passed with ${fingerprints.length} signing certificate(s).`);
