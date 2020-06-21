import Axios from 'axios'

// ACTION TYPES
const SET_SNEAKERS = 'SET_SNEAKERS'

// ACTION CREATORS
export const setSneakers = sneakers => {
  return {
    type: SET_SNEAKERS,
    sneakers
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

export const fetchPreview = () => {
  return async dispatch => {
    try {
      const {data} = await Axios.get('/api/sneakers/preview')
      dispatch(setSneakers(data))
    } catch (error) {
      console.log('ERROR IN FETCHPREVIEW THUNK')
    }
  }
}

// REDUCERS
export default function sneakerReducer(state = [], action) {
  switch (action.type) {
    case SET_SNEAKERS:
      return action.sneakers
    default:
      return state
  }
}
