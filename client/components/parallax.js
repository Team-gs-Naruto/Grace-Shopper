import React, {useState, useEffect} from 'react'
import M from 'materialize-css'
import Slider from './slider'
import Preview from './preview'
import {Jumbotron, Container, Button} from 'react-bootstrap'

const Parallax = () => {
  useEffect(() => {
    let elements = document.querySelectorAll('.parallax')
    M.Parallax.init(elements)
  }, [])
  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          <Jumbotron>
            <img src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
            <div className="center">
              <a className="waves-effect waves-light btn-large">Shop Now</a>
            </div>
          </Jumbotron>
        </div>
      </div>
      <div className="section white">
        <div className="row container">
          <h2 className="header center">Welcome to Sneaker Shopper</h2>
          <p className="grey-text text-darken-3 lighten-3 center">
            We have the largest selection of in demand shoes
          </p>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src="https://i.pinimg.com/originals/b3/35/fb/b335fb19aee071b7e32809c4466e7d4f.jpg" />
        </div>
      </div>
      <div className="section white">
        <div className="row container">
          <Preview />
        </div>
      </div>
      <div className="parallax-container ">
        <div className="parallax">
          <img src="https://i.pinimg.com/originals/b3/35/fb/b335fb19aee071b7e32809c4466e7d4f.jpg" />
        </div>
      </div>
      <Slider />
    </div>
  )
}

export default Parallax
