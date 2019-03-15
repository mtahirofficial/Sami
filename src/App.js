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

import './App.css';

import {Switch,BrowserRouter,Route} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
         <Switch>
         <Route path="/login" component={Login} />
         <Route path="/resgister" component={Resgister} />
         <Route path="/product-details" component={ProductDetails}/>
         <Route path="/cart" component={Cart}/>
         <Route path="/admin-login" component={AdminLogin}/>
         <Route path="/dashboard" component={DashBoard}/>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
