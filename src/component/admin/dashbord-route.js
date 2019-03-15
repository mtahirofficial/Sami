import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Content from '../home/content';
class DashBoardRoute extends Component{
    render(){
        return(<div>
            <Route path="/dashboard/:name" component={Content}/>
        </div>);
    }
}
export default DashBoardRoute;