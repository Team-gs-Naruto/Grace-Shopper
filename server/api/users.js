const router = require('express').Router()
const {User, Order, Purchase} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'isAdmin']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId/cart', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: +req.params.userId,
        isComplete: false
      },
      include: {all: true, nested: true}
    })
    res.json(order)
  } catch (err) {
    next(err)
  }
})

router.post('/:userId/cart', async (req, res, next) => {
  try {
    const order = await Order.findOrCreate({
      where: {
        userId: +req.params.userId,
        isComplete: false
      }
    }).spread(foundOrCreatedOrder => {
      return Purchase.findOrCreate({
        where: {
          quantity: 1,
          orderId: +foundOrCreatedOrder.id,
          sneakerId: +req.body.sneakerId,
          priceAtPurchase: +req.body.sneakerPrice
        }
      })
    })

    const findOrder = await Order.findOne({
      where: {
        userId: +req.params.userId,
        isComplete: false
      },
      include: {all: true, nested: true}
    })

    res.json(findOrder)
  } catch (err) {
    next(err)
  }
})

router.delete('/:userId/cart', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: +req.params.userId,
        isComplete: false
      }
    })
    const purchase = await Purchase.destroy({
      where: {
        sneakerId: +req.body.sneakerId,
        orderId: order.id
      }
    })
    res.json(purchase)
  } catch (err) {
    next(err)
  }
})
