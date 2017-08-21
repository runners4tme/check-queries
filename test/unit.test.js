const idIsPresent = require('../index')
const { goodRequest, badRequest, query } = require('./helper')

describe('idIsPresent', () => {
  test('should return true if the id is provided', () => {
    expect(idIsPresent(goodRequest, query)).toBeTruthy()
  })
  test('should return false if the id is not provided', () => {
    expect(idIsPresent(badRequest, query)).toBeFalsy()
  })
})
