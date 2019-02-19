import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component{

    render(){
        return(
            <div>
                 <nav> 
                <Link to='/'>LOGO</Link>
                <input type="text"/>     
                 </nav>
                 
            </div>
        );
    }
}

export default Header;