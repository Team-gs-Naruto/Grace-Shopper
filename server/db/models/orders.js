const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  isComplete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  totalPrice: {
    type: Sequilize.INTEGER
  }
})

module.exports = Order
