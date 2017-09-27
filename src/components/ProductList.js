import React from 'react';
import { Panel, Image, Button, Col, Label } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addToCart } from '../actionCreators';

const ProductList = props =>
  (<div>
    {props.products.map( product =>
      <Col xs={4} key={product.id}>
        <Panel bsStyle="info" header={product.name}>
          <Image src={product.link} responsive/>
          <p className="text-justify">{product.desc}</p>
          <Button className="pull-right" bsSize="small" onClick={()=>{props.addToCart(product)}}>
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

const mapStateToProps = state => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addToCart( product ) {
      dispatch(addToCart(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);