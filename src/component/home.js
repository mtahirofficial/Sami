import React,{Component} from "react";
import Sliderbar from './slider';
import SearchBar from './searchbar';
import Content from './content';
class Home extends Component{

    render(){
        return(<div>
           <Sliderbar/>
           <SearchBar/>
           <Content/>
        </div>);
    }
}

export default Home;