 import Home from "./Home.js";

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
