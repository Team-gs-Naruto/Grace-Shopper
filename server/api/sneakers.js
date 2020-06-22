const router = require('express').Router()
const {Sneakers} = require('../db/models')
const checkAuth = require('./permissions.middleware')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const sneakers = await Sneakers.findAll()
    // const arr = sneakers.slice(0, 12)
    res.json(sneakers)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const singleSneaker = await Sneakers.findByPk(req.params.id)
    res.json(singleSneaker)
  } catch (error) {
    next(error)
  }
})

router.put(
  '/',
  checkAuth.notAGuest,
  checkAuth.isAdmin,
  async (req, res, next) => {
    try {
      //api to create new sneaker, only accessible to admins
    } catch (err) {
      next(err)
    }
  }
)

router.delete(
  '/:id',
  checkAuth.notAGuest,
  checkAuth.isAdmin,
  async (req, res, next) => {
    try {
      //api to create new sneaker, only accessible to admins
    } catch (err) {
      next(err)
    }
  }
)
