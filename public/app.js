import Contactuser from "./contactuser.js";
import AboutUs from "./aboutus.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: "home"
    };
  }

  switch(option) {
    this.setState({
      isHidden: option
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, this.state.isHidden === "home" ? /*#__PURE__*/React.createElement("div", null, " ", /*#__PURE__*/React.createElement("img", {
      id: "logo",
      src: "logo.png"
    }), /*#__PURE__*/React.createElement("button", {
      id: "age",
      onClick: () => {
        this.switch("about");
      }
    }, "CONTINUE", " ")) : this.state.isHidden == "about" ? /*#__PURE__*/React.createElement(AboutUs, {
      switch: this.switch.bind(this)
    }) : /*#__PURE__*/React.createElement(Contactuser, null));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkNvbnRhY3R1c2VyIiwiQWJvdXRVcyIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImlzSGlkZGVuIiwic3dpdGNoIiwib3B0aW9uIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJiaW5kIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGtCQUF4QjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsY0FBcEI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFrQztBQUNoQ0MsRUFBQUEsV0FBVyxHQUFHO0FBQ1o7QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsUUFBUSxFQUFFO0FBREMsS0FBYjtBQUdEOztBQUNEQyxFQUFBQSxNQUFNLENBQUNDLE1BQUQsRUFBUztBQUNiLFNBQUtDLFFBQUwsQ0FBYztBQUFFSCxNQUFBQSxRQUFRLEVBQUVFO0FBQVosS0FBZDtBQUNEOztBQUNERSxFQUFBQSxNQUFNLEdBQUc7QUFDUCx3QkFDRSxpQ0FDRyxLQUFLTCxLQUFMLENBQVdDLFFBQVgsS0FBd0IsTUFBeEIsZ0JBQ0MsaUNBQ0csR0FESCxlQUVFO0FBQUssTUFBQSxFQUFFLEVBQUMsTUFBUjtBQUFlLE1BQUEsR0FBRyxFQUFDO0FBQW5CLE1BRkYsZUFHRTtBQUNFLE1BQUEsRUFBRSxFQUFDLEtBREw7QUFFRSxNQUFBLE9BQU8sRUFBRSxNQUFNO0FBQ2IsYUFBS0MsTUFBTCxDQUFZLE9BQVo7QUFDRDtBQUpILG1CQU1XLEdBTlgsQ0FIRixDQURELEdBYUcsS0FBS0YsS0FBTCxDQUFXQyxRQUFYLElBQXVCLE9BQXZCLGdCQUNGLG9CQUFDLE9BQUQ7QUFBUyxNQUFBLE1BQU0sRUFBRSxLQUFLQyxNQUFMLENBQVlJLElBQVosQ0FBaUIsSUFBakI7QUFBakIsTUFERSxnQkFHRixvQkFBQyxXQUFELE9BakJKLENBREY7QUF3QkQ7O0FBbkMrQjs7QUFxQ2xDQyxRQUFRLENBQUNGLE1BQVQsZUFBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkcsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhY3R1c2VyIGZyb20gXCIuL2NvbnRhY3R1c2VyLmpzXCI7XHJcbmltcG9ydCBBYm91dFVzIGZyb20gXCIuL2Fib3V0dXMuanNcIjtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNIaWRkZW46IFwiaG9tZVwiLFxyXG4gICAgfTtcclxuICB9XHJcbiAgc3dpdGNoKG9wdGlvbikge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzSGlkZGVuOiBvcHRpb24gfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuaXNIaWRkZW4gPT09IFwiaG9tZVwiID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8aW1nIGlkPVwibG9nb1wiIHNyYz1cImxvZ28ucG5nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBpZD1cImFnZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2goXCJhYm91dFwiKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ09OVElOVUV7XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IHRoaXMuc3RhdGUuaXNIaWRkZW4gPT0gXCJhYm91dFwiID8gKFxyXG4gICAgICAgICAgPEFib3V0VXMgc3dpdGNoPXt0aGlzLnN3aXRjaC5iaW5kKHRoaXMpfSAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8Q29udGFjdHVzZXIgLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7LyogPENvbnRhY3R1c2VyLz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcclxuIl19