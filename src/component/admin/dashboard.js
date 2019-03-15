import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../navbar/navbar';
import DashBoardRoute from './dashbord-route';

class DashBoard extends Component{

    render(){
        return(<div>
            <NavBar/>
            <DashBoardRoute/>
            <div className="row">
           <div className="container">  <div className="section"></div>
            <div className="section"></div>
            <Link to="/add-product" className="btn">Add Product</Link>
            <div className="section"></div>

            <div className="card col m4 s4">
            <Link to="/dashboard/All-Category" className="card-content">All Category</Link>
            </div>
    <div className="card col m4 s4 ">
    <Link to="/dashboard/Women’s-Clothing" className="card-content">Women’s Clothing</Link>
    </div>
    <div className="card col m4 s4 ">
    <Link to="/dashboard/Men’s-Clothing"  className="card-content">Men’s Clothing</Link>
    </div>
    <div className="card col m4 s4 ">
    <Link to="/dashboard/Cellphones-&-Accessories"  className="card-content">Cellphones & Accessories</Link>
    </div>
    <div className="card col m4 s4 ">
    <Link to="/dashboard/Computer,-Office,-Security"  className="card-content">Computer, Office, Security</Link>
    </div>
    <div className="card col m4 s4 ">
    <Link to="/dashboard/Consumer-Electronics"  className="card-content">Consumer Electronics</Link>
    </div>
    <div className="card col m4 s4 ">
    <Link to="/dashboard/Jewelry-&-Watches"  className="card-content">Jewelry & Watches</Link>
    </div>
    <div className="card col m4 s4 ">
    <Link to="/dashboard/Home-&-Garden,-Appliance"  className="card-content">Home & Garden, Appliance</Link>
    </div>
    <div className="card col m4 s4 ">
    <Link to="/dashboard/Bags-&-Shoes"  className="card-content">Bags & Shoes</Link>
    </div>
    <div className="card col m4 s4 ">
    <Link to="/dashboard/Toys,-Kids-&-Baby"  className="card-content">Toys, Kids & Baby</Link>
    </div>
    <div className="card col m4 s4 ">
    <Link to="/dashboard/Sports-&-Outdoors"  className="card-content">Sports & Outdoors</Link>
    </div>
    <div className="card col m4 s4 ">
    <Link to="/dashboard/Beauty-&-Health,-Hair"  className="card-content">Beauty & Health, Hair</Link>
    </div>
    <div className="card col m5 s4 ">
    <Link to="/dashboard/Automobiles-&-Motorcycles"  className="card-content">Automobiles & Motorcycles</Link>
    </div>
    <div className="card col m5 s4 ">
    <Link to="/dashboard/Home-Improvement,-Tools"  className="card-content">Home Improvement, Tools</Link>
    </div>    
   </div>
   </div>
        </div>);
    }
}
export default DashBoard;