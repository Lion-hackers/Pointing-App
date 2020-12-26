 import Home from "./Home.js";
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  constructor() {
    super(); 
  }
 
  render() {
    return (
      <div>
 <Home/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
