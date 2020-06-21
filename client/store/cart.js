import axios from 'axios'

//ACTION TYPE
const ADD_SNEAKER_TO_CART = 'ADD_SNEAKER_TO_CART'

const REMOVE_SNEAKER_FROM_CART = 'REMOVE_SNEAKER_FROM_CART'

const SAVE_ORDER = 'SAVE_ORDER'

// ACTION CREATORS
const addSneakerToCart = item => ({
  type: ADD_SNEAKER_TO_CART,
  item
})

export const removeSneakerFromCart = id => ({
  type: REMOVE_SNEAKER_FROM_CART,
  id
})

export const saveOrder = order => ({
  type: SAVE_ORDER,
  order
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

export const savingOrder = userId => {
  return async dispatch => {
    try {
      const user = await axios.get(`/api/user/${userId}`)

      const order = await Order.create()
      user.addOrder(order)

      dispatch(saveOrder(order))
    } catch (err) {
      console.log(err)
    }
  }
}

//REDUCER
const initialState = {
  items: [],
  total: 0,
  orderId: 0
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
    case SAVE_ORDER:
      return {...state, orderId: action.order.id}
    default:
      return state
  }
}
