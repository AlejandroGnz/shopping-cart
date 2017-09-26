import React, { Component } from 'react';

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      produts: []
    }
  }
  render() {
    return (<div>ProductList Component</div>)
  }
}

export default ProductList;