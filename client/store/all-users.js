import Axios from 'axios'

const GET_USERS = 'GET_USERS'

export const getUsers = users => {
  return {
    type: GET_USERS,
    users
  }
}

export const fetchUsers = () => {
  return async dispatch => {
    try {
      const {data} = await Axios.get('/api/users')
      dispatch(getUsers(data))
    } catch (err) {
      console.log('ERROR IN THE ALL USERS THUNK')
    }
  }
}

export default function allUserReducer(state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}
