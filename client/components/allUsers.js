import React, {Component} from 'react'
import User from './user'

import {connect} from 'react-redux'
import {fetchUsers} from '../store/all-users'

export class AllUsers extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const users = this.props.users

    return (
      <div>
        {!users ? (
          <div>
            <h3 className="text-center">No users</h3>
          </div>
        ) : (
          <div>
            <div className="text-center">
              <h1>All Users</h1>
            </div>
            {users.map(user => (
              <div key={user.id}>
                <User user={user} />
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  users: state.allUsers.users
})

const mapDispatch = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapState, mapDispatch)(AllUsers)
