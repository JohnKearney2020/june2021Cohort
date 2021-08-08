import React, { Component } from 'react'

export class Name extends Component {
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
        <h2>First name: {this.props.firstName}</h2>
        <h2>Last name: {this.props.lastName}</h2>
      </div>
    )
  }
}

export default Name;