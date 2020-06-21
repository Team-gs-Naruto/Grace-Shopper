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
  checkAuth.notAGuest,
  checkAuth.isAdmin,
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

router.put(
  '/:id',
  checkAuth.notAGuest,
  checkAuth.isAdmin,
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
  checkAuth.notAGuest,
  checkAuth.isAdmin,
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
