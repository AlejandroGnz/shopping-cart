import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col} from 'react-bootstrap';
import ProductList from './components/ProductList';
import ProductCart from './components/ProductCart';

class App extends Component {
  render() {
    return (
      <Grid className="grid-container-app">
        <Row className="row-container-app">
          <Col xs={8}>
            <ProductList />
          </Col>
          <Col xs={4}>
            <ProductCart />
          </Col>
        </Row> 
      </Grid>
    );
  }
}

export default App;
