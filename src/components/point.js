import React from 'react';
import logo from "../logo.png";
import '../home.css';

class Point extends React.Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div>
          <img id="" src={logo}></img>
          <label className="tgl">
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
          </label>
        </div>
      );
    }
  }
  
  export default Point;
  