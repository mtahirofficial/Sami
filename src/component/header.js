import React, { Component } from 'react';
import {Link,Redirect} from "react-router-dom";
import M from "materialize-css";
class Header extends Component{
  componentDidMount =()=>{
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems,{
      hover:true,
    });
    elems = document.querySelectorAll('.sidenav');
     M.Sidenav.init(elems);
  }
  render(){
    return(
      <div>
        <nav className="blue">
        <div className="nav-wrapper header-container">
      <Link to="/" className="brand-logo">ecomm</Link>
      <a href="#!" data-target="slide-out" className="sidenav-trigger hide-on-large-only"><i className="material-icons"> menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/">HOME</Link></li>
        {/* dropdown btton  desktop*/}
        <li> <a className='dropdown-trigger' href='#!' data-target='dropdown1'>CATEGORY<i className=" material-icons right">arrow_drop_down</i></a></li>
        <li><Link to="/contact">CONTACT US</Link></li>
        <li><Link to="/basket"><i className="material-icons">shopping_cart</i></Link></li> 
        <li><Link to="/wishlist"><i className="material-icons left">favorite</i>WishList</Link></li> 
        <li><Link to="/login"><i className="material-icons left">person</i>Login</Link></li>
  </ul>
  </div>
        </nav>

        {/*  Dropdown Structure for desktop  */}
  <ul id='dropdown1' className='dropdown-content'>
    <li><Link to="/All-Category"><i className="material-icons left" >menu</i>All Category</Link> <div  className ="divider"></div></li>
    <li><Link to="/Women’s-Clothing"><i className="material-icons left" ></i>Women’s Clothing</Link></li><div  className ="divider"></div>
    <li><Link to="/Men’s-Clothing"><i className="material-icons left" ></i>Men’s Clothing</Link><div  className ="divider"></div></li>
    <li><Link to="/Cellphones-&-Accessories"><i className="material-icons left" ></i>Cellphones & Accessories</Link><div  className ="divider"></div></li>
    <li><Link to="/Computer,-Office,-Security"><i className="material-icons left"></i>Computer, Office, Security</Link><div  className ="divider"></div></li>
    <li><Link to="/Consumer-Electronics"><i className="material-icons left" ></i>Consumer Electronics</Link><div  className ="divider"></div></li>
    <li><Link to="/Jewelry-&-Watches"><i className="material-icons left" ></i>Jewelry & Watches</Link><div  className ="divider"></div></li>
    <li><Link to="/Home-&-Garden,-Appliance"><i className="material-icons left" ></i>Home & Garden, Appliance</Link><div  className ="divider"></div></li>
    <li><Link to="/Bags-&-Shoes"><i className="material-icons left" ></i>Bags & Shoes</Link><div  className ="divider"></div></li>
    <li><Link to="/Toys,-Kids-&-Baby"><i className="material-icons left" ></i>Toys, Kids & Baby</Link><div  className ="divider"></div></li>
    <li><Link to="/Sports-&-Outdoors"><i className="material-icons left" ></i>Sports & Outdoors</Link><div  className ="divider"></div></li>
    <li><Link to="/Beauty-&-Health,-Hair"><i className="material-icons left" ></i>Beauty & Health, Hair</Link><div  className ="divider"></div></li>
    <li><Link to="/Automobiles-&-Motorcycles"><i className="material-icons left" ></i>Automobiles & Motorcycles</Link><div  className ="divider"></div></li>
    <li><Link to="/Home-Improvement,-Tools"><i className="material-icons left" ></i>Home Improvement, Tools</Link><div  className ="divider"></div></li>
  </ul>
  {/*  Dropdown Structure end */}
  {/* side nav structure for mobile */}
  <ul id="slide-out" className="sidenav">
  <li><Link to="/">HOME</Link></li>
        {/* dropdown btton for mobile */}
        <li> <a className='dropdown-trigger' href='#!' data-target='dropdown2'>CATEGORY<i className=" material-icons right">arrow_drop_down</i></a></li>
        <li><Link to="/contact">CONTACT US</Link></li>
        <li><Link to="/basket"><i className="material-icons">shopping_cart</i></Link></li> 
        <li><Link to="/wishlist"><i className="material-icons left">favorite</i>WishList</Link></li> 
        <li><Link to="/login"><i className="material-icons left">person</i>Login</Link></li>
  </ul>
    {/*  Dropdown Structure for mobile  */}
    <ul id='dropdown2' className='dropdown-content'>
    <li><Link to="/All-Category"><i className="material-icons left" >menu</i>All Category</Link> <div  className ="divider"></div></li>
    <li><Link to="/Women’s-Clothing"><i className="material-icons left" ></i>Women’s Clothing</Link></li><div  className ="divider"></div>
    <li><Link to="/Men’s-Clothing"><i className="material-icons left" ></i>Men’s Clothing</Link><div  className ="divider"></div></li>
    <li><Link to="/Cellphones-&-Accessories"><i className="material-icons left" ></i>Cellphones & Accessories</Link><div  className ="divider"></div></li>
    <li><Link to="/Computer,-Office,-Security"><i className="material-icons left"></i>Computer, Office, Security</Link><div  className ="divider"></div></li>
    <li><Link to="/Consumer-Electronics"><i className="material-icons left" ></i>Consumer Electronics</Link><div  className ="divider"></div></li>
    <li><Link to="/Jewelry-&-Watches"><i className="material-icons left" ></i>Jewelry & Watches</Link><div  className ="divider"></div></li>
    <li><Link to="/Home-&-Garden,-Appliance"><i className="material-icons left" ></i>Home & Garden, Appliance</Link><div  className ="divider"></div></li>
    <li><Link to="/Bags-&-Shoes"><i className="material-icons left" ></i>Bags & Shoes</Link><div  className ="divider"></div></li>
    <li><Link to="/Toys,-Kids-&-Baby"><i className="material-icons left" ></i>Toys, Kids & Baby</Link><div  className ="divider"></div></li>
    <li><Link to="/Sports-&-Outdoors"><i className="material-icons left" ></i>Sports & Outdoors</Link><div  className ="divider"></div></li>
    <li><Link to="/Beauty-&-Health,-Hair"><i className="material-icons left" ></i>Beauty & Health, Hair</Link><div  className ="divider"></div></li>
    <li><Link to="/Automobiles-&-Motorcycles"><i className="material-icons left" ></i>Automobiles & Motorcycles</Link><div  className ="divider"></div></li>
    <li><Link to="/Home-Improvement,-Tools"><i className="material-icons left" ></i>Home Improvement, Tools</Link><div  className ="divider"></div></li>
  </ul>
      </div>
    )
  }
}

export default Header;