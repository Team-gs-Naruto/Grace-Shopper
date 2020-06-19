import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = ({handleClick, isLoggedIn, user}) => (
  <div>
    <Navbar fixed="fixed" bg="dark" variant="dark">
      <Navbar.Brand href="/homepage">
        <img
          alt=""
          src="https://media.giphy.com/media/dsQ0bGwVVi0aPkKo9J/giphy.gif"
          border="0"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Sneaker Shopper
      </Navbar.Brand>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/homepage">Home</Link>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Link to="/shop">Products</Link>
          &nbsp; &nbsp; &nbsp; &nbsp;
          {/* MAKE SURE TO USE THE USER ID ROUTE PATH IF THEY ARE LOGGED IN */}
          <Link to={`/${user.id}/cart`}>Cart</Link>
          &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/homepage">Home</Link>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Link to="/login">Login</Link>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Link to="/signup">Sign Up</Link>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Link to="/shop">Products</Link>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Link to="/cart">Cart</Link>
          &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
      )}
    </Navbar>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user,
    cart: state.cart,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(NavBar)

/**
 * PROP TYPES
 */
NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
