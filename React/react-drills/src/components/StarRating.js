import React, { Component } from 'react'

export class StarRating extends Component {
  // constructor(props) {
    // super(props)
    // this.state = {
    //   count: 0
    // }
  // }


  render() {
    return (
      <div>
        <h1>Star Rating</h1>
        {/* <span>🤍🖤</span> */}
        {this.props.rating >= 1 ? "🖤" : "🤍"}
        {this.props.rating >= 2 ? "🖤" : "🤍"}
        {this.props.rating >= 3 ? "🖤" : "🤍"}
        {this.props.rating >= 4 ? "🖤" : "🤍"}
        {this.props.rating >= 5 ? "🖤" : "🤍"}
      </div>
    )
  }
}

export default StarRating;