/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../index')
const User = db.model('user')

const userCredentials = {
  email: 'cody@email.com',
  password: '123',
  isAdmin: true
}

describe('User routes', () => {
  let authenticatedUser = request(app)
  let randomUSer = request(app)

  // before(function (done) {
  //   authenticatedUser
  //     .post('/login')
  //     .send(userCredentials)
  //     .end(function (err, res) {
  //       if (err) throw err
  //       token = {access_token: res.body.token}
  //       expect(res.statusCode).to.equal(200)
  //       expect('Location', '/home')
  //       done()
  //     })
  // })

  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('GET  /users/', () => {
    const codysEmail = 'cody@puppybook.com'
    let token = 'token'

    beforeEach(() => {
      return User.create({
        email: codysEmail
      })
    })

    xit('should return 200 response if the user is logged in', done => {
      console.log(authenticatedUser)
      authenticatedUser.get('/api/users').expect(200, done)
    })
    xit('if the user is not logged in we should get a 401 response code', done => {
      randomUSer
        .get('/api/users')
        .query(token)
        .expect(401, done)
    })

    // it('GET /api/users  by admin only', async (done) => {
    //   const res = await request(app).get('/api/users').expect(200)
    //   expect(res.body).to.be.an('array')
    //   expect(res.body[0].email)
    //     .to.be.equal(codysEmail)
    //     .end(function (err, res) {
    //       expect(err).equal(null)
    //       done()
    //     })
    // })
  })
})
