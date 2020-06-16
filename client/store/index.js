import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import sneakerReducer from './all-sneakers'
import singleSneakerReducer from './single-sneaker'

const reducer = combineReducers({
  user,
  allSneakers: sneakerReducer,
  singleSneaker: singleSneakerReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
