import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Icon} from 'react-materialize';
import M from "materialize-css";
class Header extends Component{
  
  render(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems);
      var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    });
    return(
      <div>
        <nav className="blue">
        <div className="nav-wrapper header-container">
      <Link to="/" className="brand-logo">ecomm</Link>
      <a href="#" data-target="slide-out" className="sidenav-trigger hide-on-large-only"><Icon>menu</Icon></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/">HOME</Link></li>
        {/* dropdown btton */}
        <li> <a class='dropdown-trigger' href='#' data-target='dropdown1'>CATEGORY<Icon right>arrow_drop_down</Icon></a></li>
        <li><Link to="/contact">CONTACT US</Link></li>
        <li><Link to="/basket"><Icon>shopping_cart</Icon></Link></li> 
        <li><Link to="/wishlist"><Icon left>favorite</Icon>WishList</Link></li> 
        <li><Link to="/signin"><Icon left>person</Icon>Login</Link></li>
  </ul>
  </div>
        </nav>

        {/*  Dropdown Structure  */}
  <ul id='dropdown1' class='dropdown-content'>
    <li><Link to="/"><Icon left></Icon>All Category</Link> <div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Women’s Clothing</Link></li><div  className ="divider"></div>
    <li><Link to="/"><Icon left></Icon>Men’s Clothing</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Cellphones & Accessories</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Computer, Office, Security</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Consumer Electronics</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Jewelry & Watches</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Home & Garden, Appliance</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Bags & Shoes</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Toys, Kids & Baby</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Sports & Outdoors</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Beauty & Health, Hair</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Automobiles & Motorcycles</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Home Improvement, Tools</Link><div  className ="divider"></div></li>
  </ul>
  {/*  Dropdown Structure end */}
  {/* side nav structure */}
  <ul id="slide-out" class="sidenav">
  <li><Link to="/">HOME</Link></li>
        {/* dropdown btton */}
        <li> <a class='dropdown-trigger' href='#' data-target='dropdown2'>CATEGORY<Icon right>arrow_drop_down</Icon></a></li>
        <li><Link to="/cart">CART</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
        <li><Link to="/basket"><Icon>shopping_cart</Icon></Link></li> 
        <li><Link to="/wishlist"><Icon left>favorite</Icon>WishList</Link></li> 
        <li><Link to="/signin"><Icon left>person</Icon>Login</Link></li>
  </ul>
    {/*  Dropdown Structure  */}
    <ul id='dropdown2' class='dropdown-content'>
    <li><Link to="/"><Icon left></Icon>All Category</Link>
    <div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Women’s Clothing</Link></li>
    <div  className ="divider"></div>
    <li><Link to="/"><Icon left></Icon>Men’s Clothing</Link>
    <div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Cellphones & Accessories</Link>
    <div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Computer, Office, Security</Link>
    <div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Consumer Electronics</Link>
    <div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Jewelry & Watches</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Home & Garden, Appliance</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Bags & Shoes</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Toys, Kids & Baby</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Sports & Outdoors</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Beauty & Health, Hair</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Automobiles & Motorcycles</Link><div  className ="divider"></div></li>
    <li><Link to="/"><Icon left></Icon>Home Improvement, Tools</Link><div  className ="divider"></div></li>
  </ul>
      </div>
    )
  }
}

export default Header;