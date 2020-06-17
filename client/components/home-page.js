import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const HomePage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/iok1arb8zaowqc3wecs9/complex-sneakers-sneaker-sale-2019"
          alt="First slide"
        />
        <Carousel.Caption />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://miro.medium.com/max/696/1*5vQ5NwwqvQjiPmF7ZzyoOw.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pmcfootwearnews.files.wordpress.com/2017/07/tom-sachs-nike-craft-mars-yard-2-copy.jpg"
          alt="Third slide"
        />

        <Carousel.Caption />
      </Carousel.Item>
    </Carousel>
  )
}

export default HomePage
