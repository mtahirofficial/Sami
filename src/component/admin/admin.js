import React,{Component} from 'react';
import AdminContent from './admincontent';
import {Route} from 'react-router-dom';
import NavBar from '../navbar/navbar';

class admin extends Component{
    render(){
        return(<div>
            <NavBar/>
            <Route path="/admin/:name" component={AdminContent}/>
        </div>);
    }
}
export default admin;