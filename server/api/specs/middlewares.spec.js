const chai = require('chai')
const expect = chai.expect
const {errorNotAllowed, isSelf} = require('../permissions.middleware')

describe('Admin check middlewares', () => {
  describe('The error middleware', () => {
    it('throws a not allowed error ', () => {
      expect(() => errorNotAllowed().to.throw(Error, 'Not allowed.'))
    })
  })

  describe('isSelf', () => {
    it('returns true if sesionId matches request id', () => {
      expect(isSelf(5, 5)).to.equal(true)
    })
    it('returns false is sessionId does not equal req id', () => {
      expect(isSelf(1, 5)).to.equal(false)
    })
  })
})
