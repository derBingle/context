const execa = require('execa')

const context = async (filepath, options) => {
  if (!filepath) {
    throw new TypeError('Expected a filepath');
  }
  if (!options) {
    return execa('context', [filepath])
  }
  let 
}
