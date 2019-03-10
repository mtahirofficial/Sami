import React,{Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import M from "materialize-css";
import fIcon from '../../images/facebook.svg';
import gIcon from '../../images/google.svg';
class Login extends Component{
 
  componentDidMount=()=>{
    var elems = document.querySelectorAll('.modal');
         M.Modal.init(elems);
         this.setState({isSetRender:true})
  }
    render(){
        return(<div className="formimage">
           <div className="row">
           <div className="section"></div>
            <div className="col m6 s12 white-text">
              <h4>Smarter Shopping</h4>
              <h4>Better Living!</h4>
              <p>Choose from over 12 different categories
with millions of products</p>
            </div>
            <div className="col m4 s12">

      <div className="card ">
        <div className="card-content">
        <form>        <div className="input-field ">
          <input id="user-name-login" type="email" className="validate"/>
          <label for="user-name-login">Email</label>
        </div>
        <div className="input-field ">
          <input  id="password-login" type="password"  className="validate"/>
          <label for="password-login">Password</label>
        </div>
        <div className="row">
        <Link to="/forget-password" >forget password</Link> 
        <div className="section"></div>
        <input className="btn col m12 s12" type="submit" value="login"/>
        <div className="section"></div>
        <div className="section"></div>
        <Link to="/resgister" className="btn col m12 s12" >resgister</Link> 
        <div className="section"></div>
        <div className="section"></div>
        <div className="divider"></div>
        <div className="section"></div>
        <span>sign in with <a href="#!"><img src={fIcon}  height="30px"/></a> <a href="#!"><img src={gIcon}  height="30px"/></a></span>
        </div>
        </form>
        </div>
        
  </div>
            </div>
          </div>
        </div>)
    }
}
export default Login;