import React, {Component} from 'react'
import {fetchOneUser} from '../store/all-users'
import {connect} from 'react-redux'
import User from './user'

export class SingleUser extends Component {
  componentDidMount() {
    this.props.fetchOneUser(this.props.match.params.id)
  }
  render() {
    const {user} = this.props
    console.log(this.props)
    return <User user={user} />
  }
}

const mapState = state => ({
  user: state.allUsers.userToPreview
})

const mapDispatch = dispatch => ({
  fetchOneUser: id => dispatch(fetchOneUser(id))
})

export default connect(mapState, mapDispatch)(SingleUser)
