import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Img = (
  <img
    src="https://media.giphy.com/media/dsQ0bGwVVi0aPkKo9J/giphy.gif"
    width="80"
    height="80"
  />
)

const NavBar = ({handleClick, isLoggedIn, user}) => (
  <div>
    <div className="navbar-fixed">
      <nav className="lighten grey 1">
        <div className="nav-wrapper">
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="/homepage" className="brand-logo">
            {Img}
          </a>
          <ul className="right hide-on-med-and-down">
            {isLoggedIn ? (
              <div>
                {/* The navbar will show these links after you log in */}
                <li className="tab">
                  <a href="/homepage" target="_self">
                    Home
                  </a>
                </li>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <li className="tab">
                  <a href="#" onClick={handleClick}>
                    Logout{' '}
                  </a>
                </li>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <li className="tab">
                  <a href="/shop" target="_self">
                    Shop
                  </a>
                </li>
                &nbsp; &nbsp; &nbsp; &nbsp;
                {/* MAKE SURE TO USE THE USER ID ROUTE PATH IF THEY ARE LOGGED IN */}
                <li className="tab">
                  <a href={`/${user.id}/cart`} target="_self">
                    Cart
                  </a>
                </li>
                &nbsp; &nbsp; &nbsp; &nbsp;
              </div>
            ) : (
              <div>
                {/* The navbar will show these links before you log in */}
                <li className="tab">
                  <a href="/homepage" target="_self">
                    Home
                  </a>
                </li>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <li className="tab">
                  <a href="/login" target="_self">
                    Login
                  </a>
                </li>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <li className="tab">
                  <a href="/signup" target="_self">
                    Sign Up
                  </a>
                </li>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <li className="tab">
                  <a href="/shop" target="_self">
                    Shop
                  </a>
                </li>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <li className="tab">
                  <a href="/cart" target="_self">
                    Cart
                  </a>
                </li>
                &nbsp; &nbsp; &nbsp; &nbsp;
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
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
