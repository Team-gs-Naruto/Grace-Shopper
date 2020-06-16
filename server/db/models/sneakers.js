const Sequelize = require('sequelize')
const db = require('../db')

const Sneakers = db.define('sneakers', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  },
  colorway: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // media: {
  //   imageUrl: {
  //     type: Sequelize.STRING,
  //     allowNull: true,
  //     defaultValue: 'https://lh3.googleusercontent.com/proxy/wMwMbg3tpWQoGnDDzyq5l09onQRZg-Az_0PrQ5Y6DCWZ5H0Mb8lIdd37WLzlWIhsJVIMAfdLC1Vq4-uwuwb4NXN6MQ_gBRwtSVgpSyac4NxQpr6f2ld5Dnhwqz1FES6Ns4PNmmzae4LmwQttF1o-wHZ5Gg'
  //   },
  //   smallImageUrl: {
  //     type: Sequelize.STRING,
  //     allowNull: true,
  //     defaultValue: 'https://lh3.googleusercontent.com/proxy/wMwMbg3tpWQoGnDDzyq5l09onQRZg-Az_0PrQ5Y6DCWZ5H0Mb8lIdd37WLzlWIhsJVIMAfdLC1Vq4-uwuwb4NXN6MQ_gBRwtSVgpSyac4NxQpr6f2ld5Dnhwqz1FES6Ns4PNmmzae4LmwQttF1o-wHZ5Gg'
  //   },
  //   thumbUrl: {
  //     type: Sequelize.STRING,
  //     allowNull: true,
  //     defaultValue: 'https://lh3.googleusercontent.com/proxy/wMwMbg3tpWQoGnDDzyq5l09onQRZg-Az_0PrQ5Y6DCWZ5H0Mb8lIdd37WLzlWIhsJVIMAfdLC1Vq4-uwuwb4NXN6MQ_gBRwtSVgpSyac4NxQpr6f2ld5Dnhwqz1FES6Ns4PNmmzae4LmwQttF1o-wHZ5Gg'
  //   }
  // },
  releaseDate: {
    type: Sequelize.STRING,
    allowNull: true
  },
  retailPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  styleId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Sneakers
