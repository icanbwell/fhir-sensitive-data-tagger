// This script checks if the CommonJS build can be imported successfully.
// It should be run after the build step.

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
  const pkg = require('../../dist/index.js');
  if (!pkg || typeof pkg !== 'object') {
    throw new Error('CommonJS import did not return an object');
  }
  if (typeof pkg.tagSensitiveResource !== 'function') {
    throw new Error('tagSensitiveResource is not exported or not a function');
  }
   
  console.log('CommonJS import check passed, tagSensitiveResource is available.');
  // eslint-disable-next-line no-undef
  process.exit(0);
} catch (err) {
   
  console.error('CommonJS import check failed:', err);
  // eslint-disable-next-line no-undef
  process.exit(1);
}
