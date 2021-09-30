import React, { Component } from "react";
import "./App.css";
import Chapter01 from "./chapter/Chapter01";
import Chapter02 from "./chapter/Chapter02";

class App extends Component {
  render() {
    const style = {
      backgroundColor: "white",
      color: "aqua",
      padding: 30,
    };
    return (
      <div style={style}>
        {/* <Chapter01></Chapter01> */}
        <Chapter02></Chapter02>
      </div>
    );
  }
}

export default App;
