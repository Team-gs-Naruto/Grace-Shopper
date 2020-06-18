const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  isComplete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

module.exports = Order
