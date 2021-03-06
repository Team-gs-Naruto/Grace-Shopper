import React from 'react'
import {connect} from 'react-redux'
import ShopPageSneaker from './sneaker'
import {Link} from 'react-router-dom'
import {fetchPreview, getBrand} from '../store/all-sneakers'
import {Container, Row, Col} from 'react-bootstrap'

export class Preview extends React.Component {
  componentDidMount() {
    this.props.fetchPreview()
  }

  render() {
    const sneakers = this.props.sneakers

    return (
      <div>
        <h2 className="center grey-text">On Sale</h2>
        <Container>
          <Row className="justify-content-md-center">
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
  fetchPreview: () => dispatch(fetchPreview()),
  fetchBrand: brand => dispatch(getBrand(brand))
})

export default connect(mapState, mapDispatch)(Preview)
