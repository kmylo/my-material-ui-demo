import React, { Component } from "react";

//COMPONENTS
import Router from "./Router";

//UTILS
import JSONPretty from "react-json-pretty";
//STYLES
import "./styles.scss";

//CONSTANT
let JSONPrettyMon = require("react-json-pretty/dist/adventure_time");

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Router />
          <div hidden={true}>
            <JSONPretty
              id="json-pretty"
              theme={JSONPrettyMon}
              style={{ fontSize: "1em", background: "#ccc", textAlign: "left" }}
              data={this.state}
              mainStyle="padding:1.3em"
              valueStyle="font-size:1em"
            />
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
