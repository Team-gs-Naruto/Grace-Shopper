import axios from 'axios'

//ACTION TYPE
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const FETCH_LOCAL_STORAGE = 'FETCH_LOCAL_STORAGE'

// ACTION CREATORS
export const addToCart = item => ({
  type: ADD_TO_CART,
  item
})

export const removeFromCart = item => ({
  type: REMOVE_FROM_CART,
  item
})

export const fetchLocalStorage = localCart => ({
  type: FETCH_LOCAL_STORAGE,
  localCart
})

// THUNK CREATORS

// here we are adding a default cart if none is in local storage
export const fetchCartFromStorage = () => {
  return async dispatch => {
    try {
      // if cart does not exist in local storage, create one
      if (!localStorage.getItem('shoppingCart')) {
        localStorage.setItem('shoppingCart', JSON.stringify([]))
      }
      // otherwise dispatch our local cart
      dispatch(
        fetchLocalStorage(JSON.parse(localStorage.getItem('shoppingCart')))
      )
    } catch (error) {
      console.log('error fetching cart from storage')
    }
  }
}

//REDUCER
const initialState = {
  userCart: []
}

export default function cartReducer(state = initialState, action) {
  let newState
  switch (action.type) {
    // ADD TO CART REDUCER

    case ADD_TO_CART:
      // creates default cart if one doesn't exist
      if (!localStorage.getItem('shoppingCart')) {
        localStorage.setItem('shoppingCart', JSON.stringify([]))
      }
      // otherwise retrieve customers cart from local storage
      state.userCart = JSON.parse(localStorage.getItem('shoppingCart'))
      // switch our state with the added item
      newState = {
        ...state,
        userCart: [...state.userCart, {item: action.item}]
      }
      //send state to local storage
      localStorage.setItem('cart', JSON.stringify(newState.cartItems))
      return newState

    // REMOVE FROM CART REDUCER

    case REMOVE_FROM_CART:
      // creates default cart if one doesn't exist
      if (!localStorage.getItem('shoppingCart')) {
        localStorage.setItem('shoppingCart', JSON.stringify([]))
      }
      // otherwise retrieve customers cart from local storage
      state.userCart = JSON.parse(localStorage.getItem('shoppingCart'))
      // switch our state with the removed item
      newState = {
        ...state,
        userCart: state.userCart.filter(
          sneaker => sneaker.item.id !== action.item.id
        )
      }
      //send state to local storage
      localStorage.setItem('shoppingCart', JSON.stringify(newState.userCart))
      return newState

    //RETRIEVE LOCAL STORAGE

    case FETCH_LOCAL_STORAGE:
      return {...state, userCart: action.localCart}
    default:
      return state
  }
}
