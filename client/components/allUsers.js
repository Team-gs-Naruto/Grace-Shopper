import React, {Component} from 'react'
import User from './user'
import {Link} from 'react-router-dom'
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
              <div className="container center">
                <h1>All Users</h1>
              </div>
            </div>
            {users.map(user => (
              <div key={user.id}>
                <div className="container center">
                  <div className="collection">
                    <Link to={`/users/${user.id}`}>
                      <a className="collection-item">{user.email}</a>
                    </Link>
                  </div>
                </div>
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
