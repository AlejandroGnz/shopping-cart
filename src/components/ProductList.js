import React, { Component } from 'react';
import { Panel, Image, Button, Col, Label } from 'react-bootstrap';
import { connect } from 'react-redux';

class ProductList extends Component {
  constructor() {
    super()
    this.state = {
      products: [
        {id:'001', price: 200, link: './img/t-shirt-1.jpg', name: 't-shirt', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae impedit inventore odit architecto'},
        {id:'002', price: 200, link: './img/t-shirt-1.jpg', name: 't-shirt', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae impedit inventore odit architecto'},
        {id:'003', price: 200, link: './img/t-shirt-1.jpg', name: 't-shirt', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae impedit inventore odit architecto'},
        {id:'004', price: 200, link: './img/t-shirt-1.jpg', name: 't-shirt', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae impedit inventore odit architecto'},
        {id:'005', price: 200, link: './img/t-shirt-1.jpg', name: 't-shirt', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae impedit inventore odit architecto'},
        {id:'006', price: 200, link: './img/t-shirt-1.jpg', name: 't-shirt', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae impedit inventore odit architecto'}
      ]
    }
  }
  render() {
    return (
    <div>
      {this.state.products.map( product =>
        <Col xs={4} key={product.id}>
          <Panel bsStyle="info" header={product.name}>
            <Image src={product.link} responsive/>
            <p className="text-justify">{product.desc}</p>
            <Button className="pull-right" bsSize="small">
              <i className="glyphicon glyphicon-shopping-cart"></i> Purchase
            </Button>
            <h4>
              <Label bsStyle="success">
                <i className="glyphicon glyphicon-usd"></i> {product.price}
              </Label>
            </h4>
          </Panel>
        </Col>
      )}
    </div>)
  }
}
const mapStateToProps = state => {
  return {
    cartItems: state.cartItems
  }
}
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart( product ) {
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);