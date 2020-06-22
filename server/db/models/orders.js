const Sequelize = require('sequelize')
const db = require('../db')
const Purchase = require('./purchase')

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
Order.updateCart = async function(orderId, sneakerId, updatedQuantity) {
  const cart = await Purchase.findOne({
    where: {
      orderId: orderId,
      productId: productId
    }
  })
  const sneaker = await Sneaker.findByPk(sneakerId)

  await cart.update({
    quantity: updatedQuantity
  })
}

module.exports = Order
