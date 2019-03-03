import React,{Component} from "react";
import {Slider,Slide} from "react-materialize";
import a from "../images/banner.jpg";
import b from "../images/camera-2251051_640.jpg";
import c from "../images/download.jpg";

class Sliderbar extends Component{

    render(){
        return(<div>
           <Slider>
  <Slide
    src={a}
    placement="left"
    title="This is our big Shopping site">
  </Slide>
  <Slide
    src={b}
    title="This is our big Shopping site"
    >
   do what you want
  </Slide>
  <Slide
    src={c}
    title="A big bazar"
    placement="right">
    lootlo mooja
  </Slide>
</Slider>
        </div>);
    }
}

export default Sliderbar;