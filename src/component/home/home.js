import React,{Component} from "react";
import Header from '../navbar/header';
import Sliderbar from './slider';
import SearchBar from './searchbar';
import Content from './content';
import UpFooter from '../footer/upfooter';
class Home extends Component{

    render(){
        return(<div>
             <Header/>
           <Sliderbar/>
           <SearchBar/>
           <Content/>
           <UpFooter />
        </div>);
    }
}

export default Home;