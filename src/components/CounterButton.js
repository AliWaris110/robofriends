import React, { Component } from "react";
class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  updateCount = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.count !== this.state.count) {
  //     return true;
  //   }

  //   return false;
  // }
  render() {
    console.log("CounterBtton");
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count:{this.state.count}
      </button>
    );
  }
}

export default CounterButton;
