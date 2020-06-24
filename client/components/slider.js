import React from 'react'
import M from 'materialize-css'

export default class Slider extends React.Component {
  componentDidMount() {
    var elem = document.querySelector('.carousel')
    var instance = M.Carousel.init(elem, {duration: 600})
  }
  render() {
    return (
      <div className="container center-align">
        <div className="carousel ">
          <h2 className="center grey-text">New In</h2>
          <a className="carousel-item" href="#one!">
            <img src="https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Off-White-University-Blue/Images/Air-Jordan-1-Retro-High-Off-White-University-Blue/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000" />
          </a>
          <a className="carousel-item" href="#two!">
            <img src="https://stockx-360.imgix.net/adidas-Yeezy-500-Stone/Images/adidas-Yeezy-500-Stone/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1575330093&w=1000" />
          </a>
          <a className="carousel-item" href="#three!">
            <img src="https://stockx.imgix.net/Air-Jordan-6-Retro-Hare.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1591072732&w=1000" />
          </a>
          <a className="carousel-item" href="#four!">
            <img src="https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Off-White-Chicago/Images/Air-Jordan-1-Retro-High-Off-White-Chicago/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000" />
          </a>
          <a className="carousel-item" href="#five!">
            <img src="https://stockx-360.imgix.net/Nike-Air-Max-90-LX-90s-Dancefloor-Green-W/Images/Nike-Air-Max-90-LX-90s-Dancefloor-Green-W/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1579682643&w=1000" />
          </a>
        </div>
      </div>
    )
  }
}
