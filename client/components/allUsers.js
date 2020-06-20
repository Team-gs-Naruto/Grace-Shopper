import React, {Component} from 'react'
import User from './user'
import {Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
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
            <Container>
              <Row>
                {users.map(user => (
                  <div key={user.id}>
                    <Col>
                      <Link to={`/user/${user.id}`}>
                        <User user={user} />
                      </Link>
                    </Col>
                  </div>
                ))}
              </Row>
            </Container>
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  users: state.allUsers
})

const mapDispatch = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapState, mapDispatch)(AllUsers)
