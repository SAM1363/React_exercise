import React, { Component } from 'react';

import Products from './Products';
import MyState from './MyState';



class App extends Component {
  render() {

    let products = ['milk', 'cheese', 'bread', 'eggs', 'chicken'];

    return (
      <div>

        <MyState /> 
        <br />
        hello world
        <Products  product={products} />
        <br />
        
      </div>
    );
  }
}



export default App;