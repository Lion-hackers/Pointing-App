class User extends React.Component {
    constructor() {
      super();
    }
    onSubmit=(e)=>{
      e.preventDefault();
      let arr =[];
      for ( var key in this.state){
        if(this.state[key]=== true){
          arr.push(key);
        }
      }
      let data ={
        check :arr.toString()
      };
      axios.post("localhost:27017/pointingapp" ,data)
      .then(res=> console.log(res.data));
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