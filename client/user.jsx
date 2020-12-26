class User extends React.Component {
    constructor() {
      super();
    }
   
    render() {
      return (
        <div>
          <img src="rbk.png"></img>µ
  
          <label className="tgl" >
            <input type="checkbox"    className="check" />
            <span>
              <h1 id="start" name="checkin">Checkin </h1>
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <input type="checkbox" className="check" />
            <span>
              <h1 id="Meeting" name="meeting">Meeting </h1>
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <input type="checkbox" className="check" />
            <span>
              <h1 id="end" name="checkout">Checkout</h1>
            </span>
            <br></br>
            <br></br>
            <br></br>
            <input type="submit" value="Send" />       
             </label>
        </div>
      );
    }
  }
  
  export default User;