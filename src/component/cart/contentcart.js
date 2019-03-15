import React,{Component} from 'react';
import {Link} from "react-router-dom";
class ContentCart extends Component{

render(){
    return(<div>
        <div className="row">
         <div className="col m8">
         <div className="card">
         <div className="card-content">
        <table>
            <tr>
                <th>product & detail</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
            </tr>
            <tr>
                <td><img src="" alt="image"/><Link to="/product-details">Sexy Bikinis Women Swimsuit 2018 Summer
             Cut Out Bathing  Suits Push Up Bikini <br/> Print Swimwear Beach Wear With Underwire Biquini</Link>
             <p>color : pink</p>
             <p>size : s</p>
             </td>
             <td><input type="number" className="browser-default" min="1" max="10"/></td>
             <td>10</td>
             <td><button className="btn red waves-effect waves-light">remove</button></td>
            </tr>
        </table>
        </div>
        </div>
        </div>
        <div className="col m4">
        <div className="card">
        <div className="card-content">
        <h5 className="center">Billing</h5>
        <hr/>
            <p>subTotal(1item)  :  20</p>
            <p>shipping  :  2</p>
            <hr/>
            <h5>Total :  100</h5>
        </div>
        </div>
        </div>
        </div>

    </div>);
}
}
export default ContentCart;