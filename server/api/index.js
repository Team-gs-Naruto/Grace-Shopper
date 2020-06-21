const router = require('express').Router()
module.exports = router
const checkFuncs = require('./permissions.middleware')

router.use('/sneakers', require('./sneakers'))
router.use('/', checkFuncs.notAGuest, checkFuncs.isAdmin, (req, res, next) => {
  next()
})
router.use('/users', require('./users'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
