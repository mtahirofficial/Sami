import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class NavBar extends Component{

render(){
    return(<div>
    <nav className="blue">
    <div  className="nav-wrapper container"> 
    <Link to="/" className="left"><h5>ecomm</h5></Link>
    </div>
    </nav>
    </div>);
}
}
export default NavBar;