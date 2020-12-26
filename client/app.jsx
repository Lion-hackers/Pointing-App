 import Home from "./Home.js";
 import User from "./User.js";

class App extends React.Component {
  constructor() {
    super(); 
  }
  render() {
    return (
      <div>
 <User/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
