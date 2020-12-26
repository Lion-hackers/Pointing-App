import User from "./User.js";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src="rbk.png"></img>
        <div className="container">
          <section id="content">
            <form action="">
              <h1>Login</h1>
              <div>
                <input type="text" placeholder="Username" id="username" />
              </div>
              <div>
                <input type="password" placeholder="Password" id="password" />
              </div>
              <div>
                <input type="submit" value="Log in" />
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
