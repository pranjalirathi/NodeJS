//getting the parent directory with the help of a helper function

const path = require('path');

module.exports = path.dirname(require.main.filename);