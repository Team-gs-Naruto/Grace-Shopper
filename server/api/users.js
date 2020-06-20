const router = require('express').Router()
const {User, Order, LineItem, Sneakers} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (error) {
    next(error)
  }
})

// Cart Routes

// retrieve our cart
router.get('/:userId/cart', async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        isComplete: false
      },
      include: {all: true, nested: true}
    })
    res.json(userOrder)
  } catch (error) {
    next(error)
  }
})

//  add to cart
router.post('/:userId/cart', async (req, res, next) => {
  try {
    const userOrder = await Order.findOrCreate({
      where: {
        userId: req.params.userId,
        isComplete: false
      }
    })
    await LineItem.create({
      itemId: req.body.id,
      orderId: userOrder.id
    })
  } catch (error) {
    next(error)
  }
})

// remove from cart
router.delete('/:userId/cart', async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        customerId: req.params.id,
        isComplete: false
      }
    })
    await LineItem.destroy({
      where: {
        orderId: userOrder.id,
        itemId: req.body.id
      }
    })
  } catch (error) {
    next(error)
  }
})
module.exports = router
