import React from 'react'
import {connect} from 'react-redux'
import ShopPageSneaker from './sneaker'
import {Link} from 'react-router-dom'
import {fetchPreview} from '../store/all-sneakers'
import {Row, Container} from 'react-bootstrap'

export class Preview extends React.Component {
  componentDidMount() {
    this.props.fetchSneakers()
  }

  render() {
    const sneakers = this.props.sneakers

    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <h4 className="center">On Sale</h4>
            {sneakers.map(sneaker => (
              <div key={sneaker.id}>
                <div className="col s6 m4">
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
  fetchSneakers: () => dispatch(fetchPreview())
})

export default connect(mapState, mapDispatch)(Preview)
