import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {clearCartThunk} from '../store/cart'
import {Form, Button, Col, Container} from 'react-bootstrap'

export class CheckoutForm extends React.Component {
  render() {
    const {user, clearingCart} = this.props
    return (
      <div className="container">
        <Container>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Additional Comments</Form.Label>
                <Form.Control type="text" placeholder="Additional comments" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>
            <div className="container center">
              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;
              <Link to="/thankyou">
                <Button
                  className="grey"
                  variant="primary"
                  type="submit"
                  onClick={() => clearingCart(user.id)}
                >
                  Submit
                </Button>
              </Link>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </div>
          </Form>
        </Container>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cartItems: state.cart,
    user: state.user
  }
}
const mapDispatch = dispatch => ({
  clearingCart: userId => dispatch(clearCartThunk(userId))
})

export default connect(mapState, mapDispatch)(CheckoutForm)
