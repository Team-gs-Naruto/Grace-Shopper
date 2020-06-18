const {expect} = require('chai')
const db = require('../index')
const Sneakers = db.model('sneakers')

describe('Sneaker model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('createDefaultPicture', () => {
    let newSneaker
    beforeEach(async () => {
      newSneaker = await Sneakers.create({
        brand: 'Nike',
        title: 'Air-Force 1',
        retailPrice: 150
      })
    })
    it('creates a brand attribute', () => {
      expect(newSneaker.brand).to.equal('Nike')
    })
    it('creates a title attribute', () => {
      expect(newSneaker.title).to.equal('Air-Force-1')
    })
    it('creates a price for sneaker', () => {
      expect(newSneaker.price).to.equal(150)
    })
    it('creates a default image for sneaker', () => {
      expect(newSneaker.media.defaultValue).to.equal(
        'https://lh3.googleusercontent.com/proxy/wMwMbg3tpWQoGnDDzyq5l09onQRZg-Az_0PrQ5Y6DCWZ5H0Mb8lIdd37WLzlWIhsJVIMAfdLC1Vq4-uwuwb4NXN6MQ_gBRwtSVgpSyac4NxQpr6f2ld5Dnhwqz1FES6Ns4PNmmzae4LmwQttF1o-wHZ5Gg'
      )
    })
  })
})
