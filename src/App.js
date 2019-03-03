import React, { Component } from 'react';
import Header from './component/header';
import Home from './component/home';
import Footer from './component/footer';
import './App.css';

import {Switch,BrowserRouter,Route} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div >
        <Header/>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
