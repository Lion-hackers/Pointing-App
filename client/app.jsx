import Contactuser from "./contactuser.js";
import AboutUs from "./aboutus.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: "home",
    };
  }
  switch(option) {
    this.setState({ isHidden: option });
  }
  render() {
    return (
      <div>
        {this.state.isHidden === "home" ? (
          <div>
            {" "}
            <img id="logo" src="logo.png"></img>
            <button
              id="age"
              onClick={() => {
                this.switch("about");
              }}
            >
              CONTINUE{" "}
            </button>
          </div>
        ) : this.state.isHidden == "about" ? (
          <AboutUs switch={this.switch.bind(this)} />
        ) : (
          <Contactuser />
        )}

        {/* <Contactuser/> */}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
