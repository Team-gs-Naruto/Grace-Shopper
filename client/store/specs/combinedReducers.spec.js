import {expect} from 'chai'
import {createStore, applyMiddleware} from 'redux'
import {reducer} from '../index'
import enforceImmutableState from 'redux-immutable-state-invariant'
import {addSneakerToCart} from '../cart'
import {getOneUser} from '../all-users'

let store

beforeEach(() => {
  store = createStore(reducer, applyMiddleware(enforceImmutableState()))
})

describe('Combined reducers', () => {
  const sneaker = {id: 1, brand: 'Nike'}
  it('adds a sneaker to cart', () => {
    store.dispatch(addSneakerToCart(sneaker))

    expect(store.getState().cart).to.equal(sneaker)
  })
  it('sets the correct user to preview', () => {
    const user = {email: 'zu@zu.com'}
    store.dispatch(getOneUser(user))
    expect(store.getState().allUsers.userToPreview).to.equal(user)
  })
  //test more action creators
})
