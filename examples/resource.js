const idIsPresent = require('../index')
const query = 'id'

/**
* Example of how to use the package with express js
* On this example, i am checking if id was provided
*/

const editResource = (req, res, next) => {
  if (idIsPresent(req, query)) {
    // edit the resource here.
  } else {
    // handle the missing query here.
  }
}

module.exports.editResource = editResource
