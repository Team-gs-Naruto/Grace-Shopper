const Sequelize = require('sequelize')
const db = require('../db')

const LineItem = db.define('lineitem', {
  priceAtPurchase: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

module.exports = LineItem
