import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

class ProductCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: []
    }
  }
  render() {
    return (
    <div>
    <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Item Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {this.state.cartItems.length > 0 ? this.state.cartItems.map( (item, index) =>
        <tr>
          <td>{index}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      ): <td className="text-center" colSpan={3}>not item selected</td>}
    </tbody>
  </Table>
  <Button className="pull-right" bsStyle="primary" bsSize="small">
    <i className="glyphicon glyphicon-ok"></i> Buy items
  </Button>
  </div>)
  }
}

export default ProductCart;