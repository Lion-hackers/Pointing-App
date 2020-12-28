import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Admin from './components/admin';
import Point from './components/point';

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

          <Route path="/home" component={Home} />
          <Route path="/point" component={Point} />
          <Route path='/admin' component={Admin}/>
          {localStorage.role == "Admin" ? <Redirect to={"/admin"}/> : localStorage.role == 'User' ?  <Redirect to={"/point"}/> : <Redirect to={"/home"}/>}
        </div>
      </Router>
    );
  }
}

export default App;
