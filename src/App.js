import React, { Component } from 'react';
import Home from './component/home/home';
import Footer from './component/footer/footer';
import Login from './component/usersDetail/loginFrom';
import Resgister from './component/usersDetail/register'
import ProductDetails from './component/productdetails';
import Cart from './component/cart/cart';
//admin componet
import AdminLogin from './component/admin/adminlogin';
import DashBoard from './component/admin/dashboard';
import AddProduct from './component/admin/addproduct';
import { Provider } from 'react-redux'
import store from './redux'
import './App.css';

import { Switch, BrowserRouter, Route } from "react-router-dom";
import admin from './component/admin/admin';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/resgister" component={Resgister} />
              <Route path="/product-details" component={ProductDetails} />
              <Route path="/cart" component={Cart} />
              <Route path="/admin-login" component={AdminLogin} />
              <Route path="/dashboard" component={DashBoard} />
              <Route path="/add-product" component={AddProduct} />
              <Route path="/admin/:name" component={admin} />
              <Route path="/All-Category" component={Home} />
              <Route path="/" component={Home} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
