import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  plusClickHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  minusClickHandler = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <h1>Counter component!</h1>
        <button onClick={this.minusClickHandler}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.plusClickHandler}>+</button>
      </div>
    )
  }
}

export default Counter;
