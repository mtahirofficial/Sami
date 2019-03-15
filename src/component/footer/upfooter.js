import React,{Component} from "react";
import {Link} from 'react-router-dom';

class UpFooter extends Component{

    render(){
        return(<div className=" grey lighten-2">
        <div className="container ">
         <div className="row">
         <div className="col s12 m4">
         <ul>
             <li><h5>Subscription</h5></li>
             <li>
                 <div className="row">
                 <form>

                 <input  type="email" label="Email" className="col m8 s8"  />
                    <button type="submit" className="btn red col m4 s4">subscribe</button>
                 </form>
                 </div>
             </li>
             <li>Register now to get updates on promotions and coupons.</li>
             <li><h4>Stay Connected</h4></li>
             <li><a href=""><i className="">facebook</i></a></li>
         </ul>
         </div>
         <div className="col s12 m2">
         <ul>
         <li><h5>How to Buy</h5></li>
         <li><Link to="/Making-Payments"  className="grey-text ">Making Payments</Link></li>
         <li><Link to="/Delivery-Options"  className="grey-text ">Delivery Options</Link></li>
         <li><Link to="/Buyer-Protection"  className="grey-text ">Buyer Protection</Link></li>
         </ul>
         </div>
         <div className="col s12 m3">
         <ul>
         <li><h5>Customer Service</h5></li>
         <li><Link to="/Customer-Service"  className="grey-text ">Customer Service</Link></li>
         <li><Link to="/Transaction-Service-Agreement"  className="grey-text ">Transaction Service Agreement</Link></li>
         <li><Link to="/Take-Our-Survey"  className="grey-text ">Take Our Survey</Link></li>
         </ul>
         </div>
         <div className="col s12 m3">
         <ul>
         <li><h5>Partner Promotion</h5></li>
         <li><Link to="/Partnerships"  className="grey-text ">Partnerships</Link></li>
         <li><Link to="/Delivery-Options"  className="grey-text ">Delivery Options</Link></li>
         </ul>
         </div>
         </div>

         </div>
        </div>);
    }
}

export default UpFooter;