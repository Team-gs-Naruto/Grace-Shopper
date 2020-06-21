import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from '../store/all-users'

export class User extends Component {
  makeAdmin(id) {
    this.props.updateUser(id, {isAdmin: true})
  }
  removeAdmin(id) {
    this.props.updateUser(id, {isAdmin: false})
  }
  render() {
    const {user} = this.props
    return (
      <div>
        <Card style={{width: '18rem'}}>
          <Link to={`/users/${user.id}`}>
            <p>{user.email}</p>
          </Link>

          {user.isAdmin ? (
            <button type="button" onClick={() => this.removeAdmin(user.id)}>
              Remove Admin
            </button>
          ) : (
            <button type="button" onClick={() => this.makeAdmin(user.id)}>
              Make Admin
            </button>
          )}
        </Card>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  updateUser: (id, isAdmin) => dispatch(updateUser(id, isAdmin))
})

export default connect(null, mapDispatch)(User)
