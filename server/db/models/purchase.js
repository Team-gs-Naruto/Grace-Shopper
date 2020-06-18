const Sequelize = require('sequelize')
const db = require('../db')
const Sneakers = require('./sneakers')

const Purchase = db.define('purchase', {
  priceAtPurchase: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

module.exports = Purchase
