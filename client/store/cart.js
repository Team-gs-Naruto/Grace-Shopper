import axios from 'axios'
import Order from '../../server/db/models/orders'

//ACTION TYPE
const ADD_SNEAKER_TO_CART = 'ADD_SNEAKER_TO_CART'

const REMOVE_SNEAKER_FROM_CART = 'REMOVE_SNEAKER_FROM_CART'

const SAVE_CART = 'SAVE_CART'

// ACTION CREATORS
const addSneakerToCart = item => ({
  type: ADD_SNEAKER_TO_CART,
  item
})

export const removeSneakerFromCart = id => ({
  type: REMOVE_SNEAKER_FROM_CART,
  id
})

export const saveCart = cart => ({
  type: SAVE_CART,
  cart
})

// THUNK CREATORS
export const cartSneaker = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/sneakers/${id}`)
      dispatch(addSneakerToCart(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const savingCart = userId => {
  return async dispatch => {
    try {
      const user = await axios.get(`/api/user/${userId}`)

      // const order = await order.create
      // user.addOrder(order)

      // dispatch(saveCart(order))
    } catch (err) {
      console.log(err)
    }
  }
}

//REDUCER
const initialState = {
  items: [],
  total: 0
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SNEAKER_TO_CART:
      let addedItem = state.items.find(item => item.id === action.item.id)
      if (addedItem) {
        addedItem.quantity += 1
        return {...state, total: state.total + addedItem.retailPrice}
      } else {
        action.item.quantity = 1
        let newTotal = state.total + action.item.retailPrice
        return {...state, items: [...state.items, action.item], total: newTotal}
      }
    case REMOVE_SNEAKER_FROM_CART:
      return {
        ...state,
        items: state.items.filter(sneaker => sneaker.id !== action.id)
      }
    default:
      return state
  }
}
