const semver = require('semver');
const { engines } = require('./package.json');
const currentNodeVersion = process.version;

if (!semver.satisfies(currentNodeVersion, engines.node)) {
  console.error(`Node.js version ${currentNodeVersion} is not compatible. Please use Node.js version ${engines.node}.`);
  process.exit(1); // Exit with a failure code
}
