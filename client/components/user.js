import React from 'react'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'

const User = props => {
  const {user} = props
  return (
    <div>
      <Card style={{width: '18rem'}}>
        <Link to={`/users/${user.id}`}>
          <p>{user.email}</p>
        </Link>

        {user.isAdmin ? (
          <button type="button">Remove Admin</button>
        ) : (
          <button type="button">Make Admin</button>
        )}
      </Card>
    </div>
  )
}

export default User
