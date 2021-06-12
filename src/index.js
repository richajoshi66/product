import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ViewProduct from './Component/ViewProduct/ViewProduct';
import AddProduct from './Component/AddProduct/AddProduct';
import EditProduct from './Component/EditProduct/EditProduct';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom' ;


ReactDOM.render( <App/> , document.getElementById('root'));
registerServiceWorker();
