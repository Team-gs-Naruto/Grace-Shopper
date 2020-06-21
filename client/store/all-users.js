import Axios from 'axios'

const GET_USERS = 'GET_USERS'
const GET_ONE_USER = 'GET_ONE_USER'

export const getUsers = users => {
  return {
    type: GET_USERS,
    users
  }
}

export const getOneUser = user => {
  return {
    type: GET_ONE_USER,
    user
  }
}

export const updateUser = (id, isAdmin) => {
  return async dispatch => {
    try {
      const {data} = await Axios.put(`/api/users/${id}`, isAdmin)

      dispatch(getOneUser(data))
    } catch (err) {
      console.log('ERROR IN UPDATE USER THUNK')
    }
  }
}

export const fetchOneUser = id => {
  return async dispatch => {
    try {
      const {data} = await Axios.get(`/api/users/${id}`)
      dispatch(getOneUser(data))
    } catch (err) {
      console.log('ERROR IN ONE USER THUNK')
    }
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
const initialState = {
  users: [],
  userToPreview: {}
}

export default function allUserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {...state, users: action.users}
    case GET_ONE_USER:
      return {...state, userToPreview: action.user}
    default:
      return state
  }
}
