import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateUser from "./components/create_user";
import UsersList from "./components/users_list";

import logo from "./logo.png";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.rebootkamp.net/">
              <img className="navbar-brand" src={logo} width="110" height="60" alt="" />
            </a> 
            <button onClick={this.toggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
              <Link to="/" className="navbar-brand"><b>Pointing App</b></Link>
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/users" className="nav-link">Users</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create User</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/users" component={UsersList} />
          <Route path="/create" component={CreateUser} />
          {/* <Route path="/edit/:id" component={EditUser} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
