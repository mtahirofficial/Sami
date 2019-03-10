import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import a from '../images/banner.jpg';
import b from '../images/background.jpg';
import M from 'materialize-css';
class ProductDetails extends Component {
    state ={
        picCurrentSrc:'',
    }
    componentDidMount=()=>{
        var elems = document.querySelectorAll('.materialboxed');
             M.Materialbox.init(elems);
             this.setState({picCurrentSrc:a});
    }
    picChange =(src)=>{
        this.setState({picCurrentSrc:src})
    }
 render(){
     let arry =[a,b,a,b,a]
     return(<div className="grey lighten-2">
     <div className="section"></div>
     <div className="container-product">
     <div className="card">
     <div className="row card-content">
     <div className="col m1 s4 ">
    
     {arry.map((value,index)=>{
         return <ul key={index}> 
         <li  onMouseEnter={()=>{this.picChange(value)}}>
        <img src={value} width="80px" height ='40px'/>
         </li>
         </ul>
     })}
   
     </div>
     <div className="col m6 s8">
     <img className="responsive-img materialboxed image-hight" src={this.state.picCurrentSrc}/>
     </div>
     <div className="col m5 s12">
        <p>Outdoor Sprots Winter Warm Touch Screen Gloves Men Ski Gloves Snowboard Gloves Motorcycle Riding Waterproof Windstopper Gloves</p>
    <div className="divider"></div>
    <div className="row">
    <div className="col m3 s3">
    <ul>
        <li>price:</li>
        <li><div className="section"></div></li>
        <li>color:</li>
        <li><div className="section"></div></li>
        <li>shipping:</li>
        <li><div className="section"></div></li>
        <li>Quantity:</li>
        <li><div className="section"></div></li>
        <li>Total Price:</li>
    </ul>
    </div>
    <div className="col m8 s8 offset-m1 offset-s1" >
    <ul>
        <li>price:</li>
        <li><div className="section"></div></li>
        <li>color:</li>
        <li><div className="section"></div></li>
        <li>shipping:</li>
        <li><div className="section"></div></li>
        <li>Quantity:</li>
        <li><div className="section"></div></li>
        <li>Total Price:</li>
    </ul>
    </div>
    </div>
    <div className="section"></div>
    <div className="row">
    <div className="col m3 s3">
    <Link to="buy-product" className="btn">buy now</Link>
    </div>
    <div className="col m3 s3 offset-m1 offset-s1 ">
    <Link to="buy-product" className="btn">add to cart</Link>
    </div>
    </div>
     </div>
     </div>
     </div>
     </div>
     <div className="section"></div>
     </div>);
 }
}
export default ProductDetails;