import React, { Component } from 'react'

export class Friend extends Component {
  // constructor(props) {
    // super(props)
    // this.state = {
    //   count: 0
    // }
  // }


  render() {
    return (
      <div>
        <h1>Friend component!</h1>
        <h2>{this.props.friendName}</h2>
      </div>
    )
  }
}

export default Friend;
