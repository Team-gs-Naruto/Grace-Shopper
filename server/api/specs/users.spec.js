/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return User.create({
        email: codysEmail
      })
    })

    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].email).to.be.equal(codysEmail)
      expect(res.body[0].isAdmin).to.be.equal(false)
    })

    it('can check if an user is an admin', async () => {
      const admin = await User.create({email: 'bb@yahoo.com', isAdmin: true})
      const notAdmin = await User.create({email: 'mmp@hotmail.com'})

      expect(admin.isAdmin).to.be.equal(true)
      expect(notAdmin.isAdmin).to.be.equal(false)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
