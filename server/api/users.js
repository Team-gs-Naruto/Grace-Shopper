const router = require('express').Router()
const {User, Order, Purchase} = require('../db/models')
const checkAuth = require('./permissions.middleware')
module.exports = router

router.get(
  '/',
  checkAuth.notAGuest,
  checkAuth.isAdmin,
  async (req, res, next) => {
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
  }
)

router.get(
  '/:id',
  checkAuth.notAGuest,
  checkAuth.isAdmin,
  async (req, res, next) => {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id
        }
      })
      res.json(user)
    } catch (err) {
      next(err)
    }
  }
)

router.get(
  '/:userId/cart',

  async (req, res, next) => {
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
  }
)

router.put('/cart', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        id: +req.body.orderId
      }
    })
    order.update({isComplete: true})
    //res.send('Success')
    res.json(order)
  } catch (err) {
    next(err)
  }
})

router.put(
  '/:id',

  async (req, res, next) => {
    console.log(req.body)
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id
        }
      })

      user.isAdmin = req.body.isAdmin
      await user.save()

      res.json(user)
    } catch (err) {
      next(err)
    }
  }
)

router.post(
  '/:userId/cart',

  async (req, res, next) => {
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
  }
)

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

router.put('/:userId/cart', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: +req.params.userId,
        isComplete: false
      }
    })
    const purchase = await Purchase.findOne({
      where: {
        orderId: order.id,
        sneakerId: +req.body.sneakerId
      }
    })
    purchase.update({
      quantity: +req.body.quantity
    })
    res.json(purchase)
  } catch (err) {
    next(err)
  }
})
