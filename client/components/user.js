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
      <div className="container center">
        <div className="row">
          <div className="col offset-m1">
            <div className="card">
              <div className="card-image">
                <img src=" https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png" />

                <Link to={`/users/${user.id}`}>
                  <p>{user.email}</p>
                </Link>

                {user.isAdmin ? (
                  <a
                    className="waves-effect waves-light btn grey"
                    type="button"
                    onClick={() => this.removeAdmin(user.id)}
                  >
                    {' '}
                    Remove Admin
                  </a>
                ) : (
                  <a
                    className="waves-effect waves-light btn grey"
                    type="button"
                    onClick={() => this.makeAdmin(user.id)}
                  >
                    {' '}
                    Make Admin
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  updateUser: (id, isAdmin) => dispatch(updateUser(id, isAdmin))
})

export default connect(null, mapDispatch)(User)
