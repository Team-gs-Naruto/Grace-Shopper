import Axios from 'axios'

// ACTION TYPES
const SET_SNEAKERS = 'SET_SNEAKERS'
const GET_BRAND = 'GET_BRAND'

// ACTION CREATORS
export const setSneakers = sneakers => {
  return {
    type: SET_SNEAKERS,
    sneakers
  }
}

export const getBrand = brand => {
  return {
    type: GET_BRAND,
    brand
  }
}

// THUNK CREATORS
export const fetchSneakers = () => {
  return async dispatch => {
    try {
      const {data} = await Axios.get('/api/sneakers')
      dispatch(setSneakers(data))
    } catch (error) {
      console.log('ERROR IN FETCHSNEAKER THUNK')
    }
  }
}

const initialState = {
  sneakers: [],
  brand: ''
}

// REDUCERS
export default function sneakerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SNEAKERS:
      return {...state, sneakers: action.sneakers}
    case GET_BRAND:
      return {...state, brand: action.brand}
    default:
      return state
  }
}
