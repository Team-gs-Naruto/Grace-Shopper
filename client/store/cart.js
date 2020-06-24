import axios from 'axios'

//ACTION TYPE
const ADD_SNEAKER_TO_CART = 'ADD_SNEAKER_TO_CART'

const REMOVE_SNEAKER_FROM_CART = 'REMOVE_SNEAKER_FROM_CART'

const GET_CART = 'GET_CART'

const GET_QUANTITY = 'GET_QUANTITY'

const CLEAR_CART = 'CLEAR_CART'

// ACTION CREATORS
export const addSneakerToCart = item => ({
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

export const getQuantity = sneaker => ({
  type: GET_QUANTITY,
  sneaker
})

export const clearCart = () => ({
  type: CLEAR_CART
})

// THUNK CREATORS
export const addSneakerToCartThunk = (sneaker, userId) => {
  return async dispatch => {
    try {
      if (userId) {
        const {data} = await axios.post(`/api/users/${userId}/cart`, {
          sneakerId: sneaker.id,
          sneakerPrice: sneaker.retailPrice
        })
        dispatch(addSneakerToCart(data.sneakers))
      } else if (!userId && !localStorage.getItem('cart')) {
        // If I am a guest and there are no items in localstorage cart
        localStorage.setItem(
          'cart',
          JSON.stringify([{...sneaker, purchase: {quantity: 1}}])
        )
        const cartArr = JSON.parse(localStorage.getItem('cart'))
        dispatch(addSneakerToCart(cartArr))
      } else {
        // If I am a guest and i have items in localstorage cart
        const cartArr = JSON.parse(localStorage.getItem('cart'))
        let alreadyInCart = false

        cartArr.forEach(item => {
          if (item.id === sneaker.id) {
            alreadyInCart = true
          }
        })

        if (alreadyInCart === false) {
          cartArr.push({...sneaker, purchase: {quantity: 1}})
        }
        localStorage.setItem('cart', JSON.stringify(cartArr))
        const newCartArr = JSON.parse(localStorage.getItem('cart'))
        dispatch(addSneakerToCart(newCartArr))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const getCartThunk = userId => {
  return async dispatch => {
    try {
      if (!localStorage.getItem('cart')) {
        // If I am a guest and there are no items in localstorage cart
        localStorage.setItem('cart', JSON.stringify([]))
      } else if (!userId) {
        // If I am a guest and i have items in localstorage cart
        dispatch(getCart(JSON.parse(localStorage.getItem('cart'))))
      } else {
        //  If I am a user and I have iems in localstorage cart
        let cartArr = JSON.parse(localStorage.getItem('cart'))

        while (cartArr.length) {
          const item = cartArr[0]
          await axios.post(`/api/users/${userId}/cart`, {
            sneakerId: item.id,
            sneakerPrice: item.retailPrice
          })
          cartArr.shift()
        }
        localStorage.setItem('cart', JSON.stringify([]))
        const {data} = await axios.get(`/api/users/${userId}/cart`)
        dispatch(getCart(data.sneakers))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const removeSneakerThunk = (userId, sneakerId) => {
  return async dispatch => {
    try {
      if (!userId) {
        let cartArr = JSON.parse(localStorage.getItem('cart'))
        let filteredCart = cartArr.filter(sneaker => sneaker.id !== sneakerId)
        localStorage.setItem('cart', JSON.stringify(filteredCart))
        dispatch(removeSneakerFromCart(sneakerId))
      } else {
        await axios.delete(`/api/users/${userId}/cart`, {data: {sneakerId}})
        dispatch(removeSneakerFromCart(sneakerId))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const getQuantityThunk = (userId, sneakerId, quantity) => {
  return async dispatch => {
    try {
      if (userId) {
        const {data} = await axios.put(`/api/users/${userId}/cart`, {
          sneakerId,
          quantity
        })
        dispatch(getQuantity(data))
      } else {
        let cartArr = JSON.parse(localStorage.getItem('cart'))
        const newLocalStorageState = cartArr.map(sneaker => {
          if (sneaker.id === sneakerId) {
            sneaker.purchase.quantity = +quantity
          }
          return sneaker
        })
        localStorage.setItem('cart', JSON.stringify(newLocalStorageState))
        dispatch(getQuantity({sneakerId, quantity}))
      }
    } catch (err) {
      console.log('ERROR IN GET QUANTITY THUNK')
    }
  }
}

export const clearCartThunk = userId => {
  return async dispatch => {
    try {
      if (userId) {
        const {data} = await axios.put(`/api/users/cart`, {userId})
      } else {
        localStorage.setItem('cart', JSON.stringify([]))
      }
      dispatch(clearCart())
    } catch (err) {
      console.log('ERROR IN GET CLEARING CART THUNK')
    }
  }
}

//REDUCER
const initialState = []

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SNEAKER_TO_CART: {
      return action.item
    }
    case REMOVE_SNEAKER_FROM_CART: {
      return state.filter(sneaker => sneaker.id !== action.id)
    }
    case GET_CART: {
      return action.cart
    }
    case GET_QUANTITY: {
      return state.map(sneaker => {
        if (sneaker.id === action.sneaker.sneakerId) {
          return {
            ...sneaker,
            purchase: {
              ...sneaker.purchase,
              quantity: +action.sneaker.quantity
            }
          }
        }
        return sneaker
      })
    }
    case CLEAR_CART:
      return initialState
    default:
      return state
  }
}
