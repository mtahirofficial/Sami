import React,{Component} from "react";
import UpFooter from './upfooter';
import DownFooter from './downfooter';

class Footer extends Component{

    render(){
        return(<div>
         <UpFooter />
        <DownFooter/>
        </div>);
    }
}

export default Footer;