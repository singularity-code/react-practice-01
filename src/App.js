import React, { Component } from "react";
import "./App.css";
import Chapter03 from "./chapter/Chapter03";

class App extends Component {
  render() {
    const style = {
      backgroundColor: "white",
      color: "aqua",
      padding: 30,
    };
    return (
      <div style={style}>
        <Chapter03></Chapter03>
      </div>
    );
  }
}

export default App;
