import React from 'react'
import Card from 'react-bootstrap/Card'

const ShopPageSneaker = props => {
  const {sneaker} = props
  return (
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src={sneaker.media} />
      <Card.Body>
        <Card.Title>Title: {sneaker.title}</Card.Title>
        <Card.Text>Price: {sneaker.retailPrice}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ShopPageSneaker
