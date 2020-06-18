import React from 'react'
import {connect} from 'react-redux'
import ShopPageSneaker from './sneaker'
import {Link} from 'react-router-dom'
import {fetchSneakers} from '../store/all-sneakers'
import {Container, Row, Col} from 'react-bootstrap'

export class AllSneakers extends React.Component {
  componentDidMount() {
    this.props.fetchSneakers()
  }

  render() {
    const sneakers = this.props.sneakers

    return (
      <div>
        <div className="text-center">
          <h1>All Sneakers</h1>
        </div>
        <Container>
          <Row>
            {sneakers.map(sneaker => (
              <div key={sneaker.id}>
                <Col>
                  <Link to={`/shop/${sneaker.id}`}>
                    <ShopPageSneaker sneaker={sneaker} />
                  </Link>
                </Col>
              </div>
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}

const mapState = state => ({
  sneakers: state.allSneakers
})

const mapDispatch = dispatch => ({
  fetchSneakers: () => dispatch(fetchSneakers())
})

export default connect(mapState, mapDispatch)(AllSneakers)
