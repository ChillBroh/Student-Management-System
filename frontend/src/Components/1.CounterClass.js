import React from "react";

class CounterClass extends React.Component {
  constructor() {
    super();
    this.increament = this.increament.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      number: 0,
    };
  }

  increament() {
    this.setState({
      number: this.state.number + 1,
    });
  }

  decrement() {
    this.setState({
      number: this.state.number - 1,
    });
  }

  reset() {
    this.setState({
      number: 0,
    });
  }

  render() {
    return (
      <div>
        <h1>Counter = {this.state.number}</h1>
        <button onClick={this.increament}>+</button>{" "}
        <button onClick={this.decrement}>-</button>{" "}
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default CounterClass;
