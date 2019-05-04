import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';

import { connect } from 'react-redux'
import { addUser } from "../../actions/user-action"



class Register extends Component {
  register = (event) => {
    let fName = this.refs.fname.value;
    let lName = this.refs.lname.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;

    // alert(fName + lName + email + password)
    let user = { fName: fName, lName: lName , email: email, password: password }
// event.preventDefault();
    // console.log(user)

    let users;
    if(JSON.parse(localStorage.getItem("users"))){
      users = JSON.parse(localStorage.getItem("users"))
      users.push( user)
      localStorage.setItem("users", JSON.stringify(users))
    } else {
      users = []
      users.push(user)
      localStorage.setItem("users", JSON.stringify(users))
    }
    
    this.props.dispatch(addUser(user))
      
}
render(){


  return (<div>
    <NavBar />
    <div className="grey lighten-2">
      <div className="section"></div>
      <div className="container">
        <h3>ecomm</h3>
        <p>Smarter Shopping, Better Living!</p>
        <div className="row">
          <div className="col m6 s12 offset-m1">
            <div className="card">
              <div className="card-content">
                <h5>Create a Account</h5>
                <div className="divider"></div>
                <form>
                  <div className="row">
                    <div className="input-field col s6">
                      <input id="first-name-reg" type="text" className="validate" ref="fname" />
                      <label htmlFor="first-name-reg">First Name</label>
                    </div>
                    <div className="input-field col s6">
                      <input id="last-name-reg" type="text" className="validate" ref="lname" />
                      <label htmlFor="last-name-reg">Last Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="email-reg" type="email" className="validate" ref="email" />
                      <label htmlFor="email-reg">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="password-reg" type="password" className="validate" ref="password" />
                      <label htmlFor="password-reg">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="con-password" type="password" className="validate" ref="cpassword" />
                      <label htmlFor="con-password">confirm-Password</label>
                    </div>
                  </div>
                  <p>By creating an account, you agree to the <Link to="/Free-Membership"> Free Membership </Link> <Link to='/Agreement'> Agreement </Link> and <Link to='/Privacy-Policy'>Privacy Policy</Link>.</p>
                  <div className="row">
                    <div className="section"></div>
                    <input type="submit" className="col s12 btn" value="create Account" onClick={this.register} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>);
}
}
export default connect() (Register);