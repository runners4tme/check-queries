module.exports = (request, query) => {
  if (request.hasOwnProperty('params') && request.params.hasOwnProperty(query)) {
    return true
  } else {
    return false
  }
}
