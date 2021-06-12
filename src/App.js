import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import ViewProduct from './Component/ViewProduct/ViewProduct';
import AddProduct from './Component/AddProduct/AddProduct';
import EditProduct from './Component/EditProduct/EditProduct';

class App extends Component {
  render() {
    return (
     

      <BrowserRouter>
     
         <Switch>
         <Route path='/' component={ViewProduct} exact/>
         <Route path='/addproduct' component={AddProduct} exact/>
         <Route path='/editproduct' component={EditProduct} exact/>
         </Switch>
       </BrowserRouter>
     
    );
  }
}

export default App;
