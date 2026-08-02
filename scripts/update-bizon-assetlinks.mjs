import fs from 'node:fs';
import path from 'node:path';

const packageName = 'vn.bizon.simulation';
const assetlinksPath = path.resolve('.well-known/assetlinks.json');
const rawFingerprint = process.env.PLAY_APP_SIGNING_SHA256 || '';

function normalizeFingerprint(value) {
  const compact = value.replace(/[^0-9A-Fa-f]/g, '').toUpperCase();
  if (compact.length !== 64 || /[^0-9A-F]/.test(compact)) {
    throw new Error('PLAY_APP_SIGNING_SHA256 must contain exactly 64 hexadecimal characters.');
  }
  return compact.match(/.{2}/g).join(':');
}

if (!rawFingerprint.trim()) {
  throw new Error('PLAY_APP_SIGNING_SHA256 is required. Use the App signing key certificate from Play Console.');
}

const fingerprint = normalizeFingerprint(rawFingerprint);
const document = JSON.parse(fs.readFileSync(assetlinksPath, 'utf8'));
if (!Array.isArray(document) || document.length !== 1) {
  throw new Error('Expected one Digital Asset Links statement.');
}

const statement = document[0];
if (statement?.target?.package_name !== packageName) {
  throw new Error(`Unexpected package name: ${statement?.target?.package_name || 'missing'}`);
}

const fingerprints = Array.isArray(statement.target.sha256_cert_fingerprints)
  ? statement.target.sha256_cert_fingerprints.map(normalizeFingerprint)
  : [];

statement.target.sha256_cert_fingerprints = [...new Set([...fingerprints, fingerprint])].sort();
fs.writeFileSync(assetlinksPath, `${JSON.stringify(document, null, 2)}\n`, 'utf8');

console.log(`Digital Asset Links updated for ${packageName}.`);
console.log(`Fingerprint count: ${statement.target.sha256_cert_fingerprints.length}`);
