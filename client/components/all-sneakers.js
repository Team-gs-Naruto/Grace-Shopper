import React from 'react'
import {connect} from 'react-redux'
import ShopPageSneaker from './sneaker'
import {Link} from 'react-router-dom'
import {fetchSneakers, getBrand} from '../store/all-sneakers'
import {Container, Row, Col, ButtonGroup, Button} from 'react-bootstrap'

export class AllSneakers extends React.Component {
  componentDidMount() {
    this.props.fetchSneakers()
  }

  render() {
    const sneakers = this.props.sneakers

    return (
      <div>
        <img
          className="slider"
          src="https://www.mystylecop.com/includes/templates/yourstore/images/uploads/kobe_1591870884.jpg"
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;
        <Container className="center">
          <ButtonGroup aria-label="Basic example">
            <Button className="lighten grey 1" variant="secondary" href="/shop">
              All
            </Button>
            <Button
              className="lighten grey 1"
              variant="secondary"
              onClick={event => this.props.fetchBrand('Nike')}
            >
              Nike
            </Button>
            <Button
              className="lighten grey 1"
              variant="secondary"
              onClick={event => this.props.fetchBrand('adidas')}
            >
              Adidas
            </Button>
            <Button
              className="lighten grey 1"
              variant="secondary"
              onClick={event => this.props.fetchBrand('Puma')}
            >
              Puma
            </Button>
          </ButtonGroup>
        </Container>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;
        <Container>
          <Row className="justify-content-md-center">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;
            {sneakers.map(sneaker => (
              <div key={sneaker.id}>
                <div className="col s3 m3">
                  <Link to={`/shop/${sneaker.id}`}>
                    <ShopPageSneaker sneaker={sneaker} />
                  </Link>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}

const mapState = state => {
  const allSneakers = state.allSneakers
  if (!allSneakers.brand) {
    return {
      sneakers: state.allSneakers.sneakers
    }
  }
  return {
    sneakers: state.allSneakers.sneakers.filter(
      sneaker => sneaker.brand === allSneakers.brand
    )
  }
}

const mapDispatch = dispatch => ({
  fetchSneakers: () => dispatch(fetchSneakers()),
  fetchBrand: brand => dispatch(getBrand(brand))
})

export default connect(mapState, mapDispatch)(AllSneakers)
