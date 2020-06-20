import React from 'react'
import Card from 'react-bootstrap/Card'

const User = props => {
  const {user} = props
  return (
    <div>
      <Card style={{width: '18rem'}}>
        <p>{user.email}</p>
        <p>
          {user.isAdmin ? (
            <button type="button" onClick={console.log('Clicked')}>
              Remove Admin
            </button>
          ) : (
            <button type="button" onClick={console.log('Clicked')}>
              Make Admin
            </button>
          )}
        </p>
      </Card>
    </div>
  )
}

export default User
