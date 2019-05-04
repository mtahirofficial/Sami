import React,{Component} from "react";
import image from '../../images/banner.jpg';
import {Link} from 'react-router-dom';
class Content extends Component{

    render(){
      // console.log(this.props.match)
      // let a =this.props.match.params.name
        let arry =[1,2,3,4,5,6];
        return(<div>
          
           <div className="row ">
            <div className="container">
            <h3>Just for you </h3>
            {arry.map((value,index)=>{
                return (<div key={index} className="col m4 s12">
                 <div className="card">
        {/* <div className="card-image">
              <Link to='/product-details'>
          <img src={image} height="150"/>
          </Link>
        </div> */}
        <div className="card-content">
        <span >Card Title</span>
        </div>
        {/* <div className="card-action">
          <a href="#">This is a link</a>
        </div> */}
      </div>
                </div>)
            })}
            </div>
           </div>
        </div>);
    }
}

export default Content ;