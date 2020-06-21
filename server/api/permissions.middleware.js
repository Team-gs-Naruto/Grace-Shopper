const errorNotAllowed = () => {
  const error = new Error('Not allowed.')
  error.status = 401
  return error
}

const notAGuest = (req, res, next) => {
  if (!req.user) {
    return next(errorNotAllowed())
  }
  next()
}

const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorNotAllowed())
  }
  next()
}

const isSelf = (sessionId, reqId) => {
  return sessionId === +reqId
}

module.exports = {errorNotAllowed, notAGuest, isAdmin, isSelf}
