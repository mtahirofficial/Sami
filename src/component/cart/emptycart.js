import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class EmptyCart extends Component{

render(){
    return(<div className="grey lighten-2">
        <div className="container center ">
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
        <h5>There are no items in this cart</h5>
        <div className="section"></div>
        <Link to="/" className="btn">CONTINUE SHOPPING</Link>
        <div className="section"></div>
        
        </div>
    </div>);
}
}
export default EmptyCart;