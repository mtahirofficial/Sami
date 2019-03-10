import React,{Component} from "react";
import Sliderbar from './slider';
import SearchBar from './searchbar';
import Content from './content';
import UpFooter from '../footer/upfooter';
class Home extends Component{

    render(){
        return(<div>
           <Sliderbar/>
           <SearchBar/>
           <Content/>
           <UpFooter />
        </div>);
    }
}

export default Home;