const Sequelize = require('sequelize')
const db = require('../db')
const Sneakers = require('./sneakers')

const Purchase = db.define('purchase', {
  price: {
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

Purchase.afterCreate(instance => {
  return Sneakers.update({
    where: {
      id: instance.sneakerId
    }
  })
})

module.exports = Purchase
