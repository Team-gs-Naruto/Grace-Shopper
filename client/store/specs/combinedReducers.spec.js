import {expect} from 'chai'
import {createStore, applyMiddleware} from 'redux'
import {reducer} from '../index'
import enforceImmutableState from 'redux-immutable-state-invariant'
import {addSneakerToCart} from '../cart'
import {getOneUser, getUsers} from '../all-users'
import {setSneakers} from '../all-sneakers'
import {setSneaker} from '../single-sneaker'

let store

beforeEach(() => {
  store = createStore(reducer, applyMiddleware(enforceImmutableState()))
})

describe('Combined reducers', () => {
  const sneaker = {id: 1, brand: 'Nike'}
  const sneaker2 = {id: 2, brand: 'Puma'}
  const user = {email: 'zu@zu.com'}
  const user2 = {email: 'cody@cody.com'}
  const user3 = {email: 'pug608@yahoo.com'}

  it('adds a sneaker to cart', () => {
    store.dispatch(addSneakerToCart(sneaker))

    expect(store.getState().cart).to.equal(sneaker)
  })
  it('sets the correct user to preview', () => {
    store.dispatch(getOneUser(user))
    expect(store.getState().allUsers.userToPreview).to.equal(user)
  })
  it('sets the sneakers to state', () => {
    store.dispatch(setSneakers([sneaker, sneaker2]))
    expect(store.getState().allSneakers).to.have.lengthOf(2)
  })

  it('sets one sneaker to state', () => {
    store.dispatch(setSneaker(sneaker))
    expect(store.getState().singleSneaker).to.equal(sneaker)
  })
  it('sets a list of all users to state', () => {
    store.dispatch(getUsers([user, user2, user3]))
    expect(store.getState().allUsers.users).to.have.lengthOf(3)
  })
})
