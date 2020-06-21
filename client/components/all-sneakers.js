import React from 'react'
import {connect} from 'react-redux'
import ShopPageSneaker from './sneaker'
import {Link} from 'react-router-dom'
import {fetchSneakers} from '../store/all-sneakers'
import {Row, Container, Jumbotron} from 'react-bootstrap'

export class AllSneakers extends React.Component {
  componentDidMount() {
    this.props.fetchSneakers()
  }

  render() {
    const sneakers = this.props.sneakers

    return (
      <div>
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

const mapState = state => ({
  sneakers: state.allSneakers
})

const mapDispatch = dispatch => ({
  fetchSneakers: () => dispatch(fetchSneakers())
})

export default connect(mapState, mapDispatch)(AllSneakers)
