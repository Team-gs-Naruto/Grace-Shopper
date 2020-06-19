const {expect} = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../index')
const Sneakers = db.model('sneakers')

describe('Sneakers routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/sneakers', () => {
    let newSneaker
    let anotherSneaker
    beforeEach(async () => {
      newSneaker = await Sneakers.create({
        brand: 'Nike',
        title: 'Air-Force-1',
        retailPrice: 150
      })
      anotherSneaker = await Sneakers.create({
        brand: 'Jordan',
        title: 'Hot-Hot',
        retailPrice: 120
      })
    })

    it('GET /api/sneakers gets all sneakers', async () => {
      const res = await request(app)
        .get('/api/sneakers')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].brand).to.be.equal('Nike')
      expect(res.body[0].retailPrice).to.be.equal(150)
      expect(res.body[1].brand).to.be.equal('Jordan')
      expect(res.body[1].retailPrice).to.be.equal(120)
    })

    it('GET /api/sneakers/:id gets a single sneaker', async () => {
      const res = await request(app)
        .get('/api/sneakers/1')
        .expect(200)
      expect(res.body.brand).to.be.equal('Nike')
      expect(res.body.retailPrice).to.be.equal(150)
    })
  })
})
