import React, { Component } from 'react';
import Header from './component/header';
import Home from './component/home/home';
import Footer from './component/footer/footer';
import Login from './component/usersDetail/loginFrom';
import Resgister from './component/usersDetail/register'
import ProductDetails from './component/productdetails';
import './App.css';

import {Switch,BrowserRouter,Route} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header/>
         <Switch>
         <Route path="/login" component={Login} />
         <Route path="/resgister" component={Resgister} />
         <Route path="/product-details" component={ProductDetails}/>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
