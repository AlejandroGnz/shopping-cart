import { createStore } from 'redux';

function reducer( state, action ) {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cartItems: state.cartItems.concat(action.product)
    }

  } else if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cartItems: state.cartItems.filter( product => product.id !== action.product.id)
    }
  }
  return state
}

export default createStore(reducer,{ cartItems: [] });