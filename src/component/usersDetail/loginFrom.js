import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import M from "materialize-css";
import NavBar from '../navbar/navbar';
import fIcon from '../../images/facebook.svg';
import gIcon from '../../images/google.svg';
import { connect } from 'react-redux'



class Login extends Component {

  componentDidMount = () => {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
    this.setState({ isSetRender: true })
  }
  state = {
    redirect : false
  }

  setRedirect = () => {
    this.setState({
      redirect : true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />  // change the link where you want to rdirect
    }
  }


  Login = (event) => {
    // event.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;

    const { users } = this.props;
    console.log(users[0])
    var loggedUser;
    // const loggedUser = users[0].forEach((user, index) => {
    //   if (user.email == email && user.password == password) {
    //     return user
    //     // break;/
    //   }
    // })
    for (let index = 0; index < users[0].length; index++) {
      if (users[0][index].email == email && users[0][index].password == password) {
        loggedUser = users[0][index]
        this.setRedirect()
        break;
      }

    }

    // debugger
    console.log("hello", loggedUser)
    // console.log(email + " " + password)
  }

  render() {

    return (<div>
      <NavBar />
      {this.renderRedirect()}
      <div className="formimage">
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
                  <input type="email" className="validate" ref="email" />
                  <label>Email</label>
                </div>
                  <div className="input-field ">
                    <input type="password" ref="password" className="validate" />
                    <label>Password</label>
                  </div>
                  <div className="row">
                    <Link to="/forget-password" >forget password</Link>
                    <div className="section"></div>
                    <input className="btn col m12 s12" type="submit" value="login" onClick={this.Login} />
                    <div className="section"></div>
                    <div className="section"></div>
                    <Link to="/resgister" className="btn col m12 s12" >resgister</Link>
                    <div className="section"></div>
                    <div className="section"></div>
                    <div className="divider"></div>
                    <div className="section"></div>
                    <span>sign in with <a href="#!"><img src={fIcon} height="30px" /></a> <a href="#!"><img src={gIcon} height="30px" /></a></span>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}


const mapStateToProps = (store) => {
  return {
    users: store.usersReducer
  }
}
export default connect(mapStateToProps)(Login);