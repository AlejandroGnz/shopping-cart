import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

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
        <th></th>
      </tr>
    </thead>
    <tbody>
      {this.state.cartItems.length > 0 ? this.state.cartItems.map( (item, index) =>
        <tr>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            <Button className="pull-right" bsStyle="danger" bsSize="xsmall">
              <i className="glyphicon glyphicon-remove"></i>
            </Button>
          </td>
        </tr>
      ): <tr><td className="text-center" colSpan={4}>not item selected</td></tr>}
    </tbody>
  </Table>
  <Button className="pull-right" bsStyle="primary" bsSize="small">
    <i className="glyphicon glyphicon-ok"></i> Buy items
  </Button>
  </div>)
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart( product ) {
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);