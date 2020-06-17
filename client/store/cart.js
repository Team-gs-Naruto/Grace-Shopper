import axios from 'axios'

//ACTION TYPE
const ADD_SNEAKER_TO_CART = 'ADD_SNEAKER_TO_CART'

const REMOVE_SNEAKER_FROM_CART = 'REMOVE_SNEAKER_FROM_CART'

// ACTION CREATORS
const addSneakerToCart = item => ({
  type: ADD_SNEAKER_TO_CART,
  item
})

export const removeSneakerFromCart = id => ({
  type: REMOVE_SNEAKER_FROM_CART,
  id
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

//REDUCER
const initialState = []

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SNEAKER_TO_CART:
      return [...state, action.item]
    case REMOVE_SNEAKER_FROM_CART:
      return state.filter(sneaker => sneaker !== action.id)
    default:
      return state
  }
}
