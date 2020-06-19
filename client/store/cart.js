import axios from 'axios'

//ACTION TYPE
const ADD_SNEAKER_TO_CART = 'ADD_SNEAKER_TO_CART'

const REMOVE_SNEAKER_FROM_CART = 'REMOVE_SNEAKER_FROM_CART'

const GET_CART = 'GET_CART'

// ACTION CREATORS
const addSneakerToCart = item => ({
  type: ADD_SNEAKER_TO_CART,
  item
})

export const removeSneakerFromCart = id => ({
  type: REMOVE_SNEAKER_FROM_CART,
  id
})

export const getCart = cart => ({
  type: GET_CART,
  cart
})

// THUNK CREATORS
export const addSneakerToCartThunk = (sneakerId, userId, sneakerPrice) => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/users/${userId}/cart`, {
        sneakerId,
        sneakerPrice
      })
      dispatch(addSneakerToCart(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const getCartThunk = userId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/users/${userId}/cart`)
      dispatch(getCart(data))
    } catch (err) {
      console.log(err)
    }
  }
}

//REDUCER
const initialState = {}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SNEAKER_TO_CART:
      return action.item
    case REMOVE_SNEAKER_FROM_CART:
      return state.sneakers.filter(sneaker => sneaker.id !== action.id)
    case GET_CART:
      return action.cart
    default:
      return state
  }
}
