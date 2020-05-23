import React, { Component } from 'react';
import Logo from "./assets/img/logo.png";
import Gambar from "./assets/img/bg.png";
import foot from "./assets/img/footer.png";

import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Login extends Component{
      constructor(props){
            super(props)
            this.state = {
                  email: null,
                  password: null,
                  loggedIn: false,
                  notif: false  
            }
      }
      handleEmail = event => {
            this.setState({email: event.target.value})
      }
      handlePassword = event => {
            this.setState({password: event.target.value})
      }

      handleLogin = e => {
            e.preventDefault()
            const login = ({
                  email: this.state.email,
                  password: this.state.password
            })

            const URL = 'http://localhost:12/admin/'
            axios({
                  method: 'POST',
                  url: URL,
                  data: JSON.stringify(login),
                  headers: {'content-type': 'application/json'}
            })
            .then(() => {
                  console.log(this.state.loggedIn)
                  this.setState({
                        loggedIn: true,
                        notif: false
                  })
            })
            .catch((err) => {
                  console.log('error==============', err)
                  this.setState({
                        notif: true
                  })
            })              
      }
      showNotif = () => {
            if (this.state.notif === true){
                  return(
                        <>
                              <div className="user-pass-salah">Username dan Password Salah!</div>
                        </>
                  )
            }
      }

      render(){
            if (this.state.loggedIn){
                  return <Redirect to="/dashboard"/>
            }
            return(
                  <div id="bg">
                  <img src ={Gambar} alt = "gambar"/>
                  <div id="box-login">
                        <form method="POST" onSubmit={this.handleLogin} action>
                              <img src ={Logo} width="100%" alt = "logo"/>
                              {this.showNotif()}
                              <input className="user-name" 
                                    type="text" 
                                    name="userName" 
                                    placeholder="User Name" 
                                    onChange={this.handleEmail} required></input>
                              <input className="password" 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password" 
                                    onChange={this.handlePassword} required></input>
                              <input className="login-button" 
                                    type="submit" 
                                    value="Login"></input>                              
                        </form>
                  </div>
                  <div id="footer">
                  <img src ={foot} alt = "foot"/>
                  </div>
                  </div>
            );
      }
}

export default Login;