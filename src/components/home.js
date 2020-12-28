import React from 'react';
import logo from "../logo.png";
import axios from "axios";
import '../home.css'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
        userId: '',
        userPassword: ''
    };
  }

  async login(){
    await axios.post('http://localhost:4000/users/login',{userId:this.state.userId,userPassword:this.state.userPassword}).then(function (response) {
        if(typeof response.data !== "string") {
            localStorage.setItem('role',response.data.userRole)
            window.location.reload()
        }
      })
}

  render() {
    return (
      <div>
        <img id="home" src={logo}></img>
        <div className="container">
          <section id="content">
              <h1>Login</h1>
              <div>
                <input type="text" placeholder="Username" id="username" onChange={(e)=>{
                    this.setState({userId:e.target.value})
                }} />
              </div>
              <div>
                <input type="password" placeholder="Password" id="password" onChange={(e)=>{
                    this.setState({userPassword:e.target.value})
                }}/>
              </div>
              <div>
                <input onClick={this.login.bind(this)} type="submit" value="Log in" />
              </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
