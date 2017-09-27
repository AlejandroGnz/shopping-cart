import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { removeFromCart } from '../actionCreators';

const ProductCart = ({ cartItems, total, removeFromCart }) =>
  <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Item Name</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {cartItems.length > 0 ? cartItems.map( (item, index) =>
        <tr key={item.id +'-'+ index}>
          <td>{item.amount}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            <Button className="pull-right" bsStyle="danger" bsSize="xsmall" onClick={()=>{removeFromCart(item)}}>
              <i className="glyphicon glyphicon-remove"></i>
            </Button>
          </td>
        </tr>
      ): <tr><td className="text-center" colSpan={4}>not item selected</td></tr>}
      <tr>
        <td colSpan={4}>
          {`Total : ${total}`}
          <Button className="pull-right" bsStyle="primary" bsSize="small">
            <i className="glyphicon glyphicon-ok"></i> Buy items
          </Button>
        </td>
      </tr>
    </tbody>
  </Table>

const mapStateToProps = state => {
  console.log(state.cartItems)
  const total = state.cartItems
    .map(product => product.price)
    .reduce((previousValue, currentValue) => {
        return currentValue + previousValue
  }, 0)
  return {
    cartItems: state.cartItems,
    total
  }
}
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart( product ) {
      dispatch(removeFromCart(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);