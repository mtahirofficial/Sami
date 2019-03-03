import React,{Component} from "react";
import {Link} from 'react-router-dom';
import {Button,Input, Row,Col, Icon} from "react-materialize";


class UpFooter extends Component{

    render(){
        return(<div className="container">
         <Row>
         <Col s={12} m={4}>
         <ul>
             <li><h5>Subscription</h5></li>
             <li>
                 <Row>
                 <form>

                 <Input type="email" label="Email" s={9} />
                    <Button  type="submit" className="red">subscribe</Button>
                 </form>
                 </Row>
             </li>
             <li>Register now to get updates on promotions and coupons.</li>
             <li><h4>Stay Connected</h4></li>
             <li><a href=""><Icon></Icon></a></li>
         </ul>
         </Col>
         <Col s={12} m={2}>
         <ul>
         <li><h5>How to Buy</h5></li>
         <li><Link to="/Making-Payments"  className="grey-text ">Making Payments</Link></li>
         <li><Link to="/Delivery-Options"  className="grey-text ">Delivery Options</Link></li>
         <li><Link to="/Buyer-Protection"  className="grey-text ">Buyer Protection</Link></li>
         </ul>
         </Col>
         <Col s={12} m={3} >
         <ul>
         <li><h5>Customer Service</h5></li>
         <li><Link to="/Customer-Service"  className="grey-text ">Customer Service</Link></li>
         <li><Link to="/Transaction-Service-Agreement"  className="grey-text ">Transaction Service Agreement</Link></li>
         <li><Link to="/Take-Our-Survey"  className="grey-text ">Take Our Survey</Link></li>
         </ul>
         </Col>
         <Col s={12} m={3} >
         <ul>
         <li><h5>Partner Promotion</h5></li>
         <li><Link to="/Partnerships"  className="grey-text ">Partnerships</Link></li>
         <li><Link to="/Delivery-Options"  className="grey-text ">Delivery Options</Link></li>
         </ul>
         </Col>
         </Row>

         
        </div>);
    }
}

export default UpFooter;