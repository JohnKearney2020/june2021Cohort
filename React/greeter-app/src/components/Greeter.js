import React from 'react';

class Greeter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  clickHandler = () => {
    console.log('clicked!');
    this.setState({
      count: this.state.count + 10
    })
  }
  render() {
    return (
      <div className="greeter">
        {/* Hello {name ? name : "No Props Sent"}! From our functional component! */}
        <span>Hello {this.props.name || 'world'}! From our functional component!</span>
        <button onClick={this.clickHandler}>Click Me!</button>
        <span>{this.state.count}</span>
      </div>
    )
  }
}




// Functional Component

// function Greeter({ name }) {
//   return (
//     <div className="greeter">
//       {/* Hello {name ? name : "No Props Sent"}! From our functional component! */}
//       Hello {name}! From our functional component!
//     </div>
//   )
// }

// Greeter.defaultProps = {
//   name: 'No props sent!'
// }

export default Greeter;