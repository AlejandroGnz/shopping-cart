import { createStore } from 'redux';

function reducer( state, action ) {
  if (action.type === "ADD_TO_CART") {
    const counts = {}
    let cartItems = state.cartItems.concat(action.product)

    cartItems.forEach( product => {
      if (product.amount){
        counts[product.id] = product.amount;
      } else {
        counts[product.id] = (counts[product.id] || 0) + 1;
      }
    })

    cartItems = cartItems.map(product => {
      const arr = {...product, amount: counts[product.id]};
      return arr;
    })
    .filter( product => {
      if (counts[product.id]) {
        delete counts[product.id];
        return true
      } else {
        return false;
      }
    })
    return {
      ...state,
      cartItems
    }

  } else if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cartItems: state.cartItems.filter( product => product.id !== action.product.id)
    }
  }
  return state
}

export default createStore(reducer,{
  cartItems: [],
  products:[
    {id:'001', price: 200, link: './img/t-shirt-1.jpg', name: 't-shirt', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae impedit inventore odit architecto'},
    {id:'002', price: 200, link: './img/t-shirt-1.jpg', name: 't-shirt', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae impedit inventore odit architecto'},
    {id:'003', price: 200, link: './img/t-shirt-1.jpg', name: 't-shirt', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae impedit inventore odit architecto'},
    {id:'004', price: 200, link: './img/t-shirt-1.jpg', name: 't-shirt', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae impedit inventore odit architecto'},
    {id:'005', price: 200, link: './img/t-shirt-1.jpg', name: 't-shirt', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae impedit inventore odit architecto'},
    {id:'006', price: 200, link: './img/t-shirt-1.jpg', name: 't-shirt', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae impedit inventore odit architecto'}
  ]
});