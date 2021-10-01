import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDelivered");
    if (props.color !== state.color) {
      return {
        color: props.color,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should update", nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  handelClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("get snapshot");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component update", prevProps, prevState);
    if (snapshot) {
      console.log("color before update", snapshot);
    }
  }

  render() {
    console.log("render");
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handelClick}>Plus</button>
      </div>
    );
  }
}

export default LifeCycleSample;
