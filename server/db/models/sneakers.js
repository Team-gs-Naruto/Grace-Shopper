const Sequelize = require('sequelize')
const db = require('../db')

const Sneakers = db.define('sneakers', {
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  },
  colorway: {
    type: Sequelize.STRING,
    allowNull: true
  },
  media: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue:
      'https://lh3.googleusercontent.com/proxy/wMwMbg3tpWQoGnDDzyq5l09onQRZg-Az_0PrQ5Y6DCWZ5H0Mb8lIdd37WLzlWIhsJVIMAfdLC1Vq4-uwuwb4NXN6MQ_gBRwtSVgpSyac4NxQpr6f2ld5Dnhwqz1FES6Ns4PNmmzae4LmwQttF1o-wHZ5Gg'
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true
  },
  releaseDate: {
    type: Sequelize.STRING,
    allowNull: true
  },
  retailPrice: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  styleId: {
    type: Sequelize.STRING,
    allowNull: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
})

module.exports = Sneakers
