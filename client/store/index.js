import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import cartReducer from './cart'
import sneakerReducer from './all-sneakers'
import singleSneakerReducer from './single-sneaker'
import allUserReducer from './all-users'

export const reducer = combineReducers({
  user,
  allUsers: allUserReducer,
  allSneakers: sneakerReducer,
  singleSneaker: singleSneakerReducer,
  cart: cartReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
