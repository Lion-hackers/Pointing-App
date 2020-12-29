import React from 'react';
import logo from "../logo.png";
import '../home.css';
/**
 *
 *
 * @class Point
 * @extends {React.Component}
 */
class Point extends React.Component {
    constructor() {
      super();
      this.state = {
        userId: '',
        status: '',
        time: '',
      }
    }
  
    onChangeStatus = (event) => {
      this.setState({
        status: event.target.value,
        time: new Date()
      })
    }

    
  
    render() {
      return (
        <div className="container">
          <img id="" src={logo}></img>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label><h2>Status:</h2></label>
                <br></br>
                <br></br>
                <select className="form-control" value={this.state.status} onChange={this.onChangeStatus}>
                <option></option>
                <option>Login</option>
                <option>Break</option>
                <option>Lunch</option>
                <option>Meeting</option>
                <option>Logout</option>
              </select>
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" className="btn btn-secondary btn-sm" />
            </div>
          </form>

          {/* <label className="tgl">
            <input type="checkbox" className="check" />
            <span>
              <h1 className="checkbox" name="checkin">
                Checkin{" "}
              </h1>
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <input type="checkbox" className="check" />
            <span>
              <h1 className="checkbox" name="meeting">
                Meeting{" "}
              </h1>
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <input type="checkbox" className="check" />
            <span>
              <h1 className="checkbox" name="checkout">
                Checkout
              </h1>
            </span>
            <br></br>
            <br></br>
            <br></br>
            <input type="submit" value="submit" />
          </label> */}
        </div>
      );
    }
  }
  
  export default Point;
  