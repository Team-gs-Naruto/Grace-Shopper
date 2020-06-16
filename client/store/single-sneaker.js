import axios from 'axios'

// ACTION TYPES
const GET_SINGLE_SNEAKER = 'GET_SINGLE_SNEAKER'

// ACTION CREATORS
export const setSneaker = sneaker => {
  return {
    type: GET_SINGLE_SNEAKER,
    sneaker
  }
}

// THUNK CREATORS
export const fetchSingleSneaker = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/sneakers/${id}`)
      dispatch(setSneaker(data))
    } catch (error) {
      console.log('ERROR IN FETCHSINGLESNEAKER THUNK')
    }
  }
}

// REDUCERS
export default function singleSneakerReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_SNEAKER:
      return action.sneaker
    default:
      return state
  }
}
