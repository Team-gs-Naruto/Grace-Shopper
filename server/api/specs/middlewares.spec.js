const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const {
  errorNotAllowed,
  notAGuest,
  isAdmin,
  isSelf
} = require('../permissions.middleware')

describe('Admin check middlewares', () => {
  const user = {user: {isAdmin: false}}
  const admin = {user: {isAdmin: true}}
  const express = require('express')

  function next(value) {
    if (value) {
      return value
    } else {
      return 'Welcome, admin'
    }
  }
  describe('The error middleware', () => {
    it('throws a not allowed error ', () => {
      expect(() => errorNotAllowed().to.throw(Error, 'Not allowed.'))
    })
  })
  describe('The guest check middleware', () => {
    xit('throws an error if the user is a guest', () => {
      expect(() => notAGuest({}, null, next)).to.throw(Error, 'Not allowed.')
    })

    xit('executes the next middleware if the user is an admin', () => {
      expect(() => notAGuest(admin, null, next)).to.not.throw(Error)
    })
    xit('executes the next middleware if the user is logged in but no admin', () => {
      expect(() => notAGuest(user, null, () => next()).to.equal)
    })
  })

  describe('isAdmin ', () => {
    xit('checks for admin ', () => {
      expect(isAdmin(admin, null, next)).to.equal('Welcome, admin')
    })
    xit('throws error if the user is logged in but not an admin', () => {
      expect(isAdmin(user, null, next)).to.throw(Error)
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
