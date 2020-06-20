import React from 'react'
import Card from 'react-bootstrap/Card'

const User = props => {
  const {user} = props
  return (
    <Card style={{width: '18rem'}}>
      <Card.Body>
        <Card.Title>Email: {user.email}</Card.Title>
        <Card.Text>Administrator?: {user.isAdmin}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default User
