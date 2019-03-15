import React,{Component} from "react";
import a from "../../images/banner.jpg";
import b from "../../images/camera-2251051_640.jpg";
import c from "../../images/download.jpg";
import M from 'materialize-css';
class Sliderbar extends Component{
  componentDidMount=()=>{
   
    var elems = document.querySelectorAll('.slider');
    M.Slider.init(elems,{
      indicators:false,
    });
  }
    render(){
     
        return(<div>
<div className="slider ">
    <ul className="slides">
      <li>
        <img src={a} alt="slide 1"/>
        <div className="caption center-align">
          <h3>This is our big Shopping site</h3>
        </div>
      </li>
      <li>
        <img src={b} alt="slide 2"/> 
        <div className="caption ">
          <h3>"This is our big Shopping site"</h3>
          <h5 className="light grey-text text-lighten-3">  do what you want</h5>
        </div>
      </li>
      <li>
        <img src={c} alt="slide 3" />
        <div className="caption right-align">
          <h3>A big bazar</h3>
          <h5 className="light grey-text text-lighten-3"> lootlo mooja</h5>
        </div>
      </li>
     
    </ul>
  </div>
        </div>);
    }
}

export default Sliderbar;