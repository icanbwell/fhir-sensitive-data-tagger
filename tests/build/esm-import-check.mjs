// This script checks if the ESM build can be imported successfully.
// It should be run after the build step.

import('../../dist/index.js')
  .then((pkg) => {
    if (!pkg || typeof pkg !== 'object') {
      throw new Error('ESM import did not return an object');
    }
    if (typeof pkg.tagSensitiveResource !== 'function') {
      throw new Error('tagSensitiveResource is not exported or not a function (ESM)');
    }
     
    console.log('✓ ESM import successful');
    // eslint-disable-next-line no-undef
    process.exit(0);
  })
  .catch((err) => {
     
    console.error('ESM import check failed:', err);
    // eslint-disable-next-line no-undef
    process.exit(1);
  });
