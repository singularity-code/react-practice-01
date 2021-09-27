import React, { Component } from "react";
import "../css/CreateRef.css";

class CreateRef extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "1234",
    });
		this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
					ref={(ref) => this.input=ref}
        ></input>
				<button onClick={this.handleButtonClick}>
					Verify
				</button>
      </div>
    );
  }
}

export default CreateRef;
