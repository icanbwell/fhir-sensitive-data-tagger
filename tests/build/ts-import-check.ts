// This script checks if the TypeScript build can be imported and used successfully.
// It should be run after the build step.

import { tagSensitiveResource } from '../../dist/index.js';

function main() {
  if (typeof tagSensitiveResource !== 'function') {
    throw new Error('tagSensitiveResource is not exported or not a function (TS)');
  }
  console.log('✓ TypeScript import successful');
}

main();
