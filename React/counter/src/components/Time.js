import React, { Component } from 'react'

export class Time extends Component {
  constructor(props) {
    super(props)
    const monthObject = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December"
    }
    
    const currentDate = new Date();
    const day = currentDate.getDate();
    const currentMonth = monthObject[currentDate.getMonth()]; // object method
    const currentYear = currentDate.getFullYear();
    let hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    // const seconds = currentDate.getSeconds();
    let amPm;
    if(hour / 12 < 1){ // if it is before noon
      amPm = "am";
    } else if(hour === 0){
      hour = 12;
    } else { // if it is after noon
      amPm = "pm";
      hour = hour % 12;
    }
    this.state = {
      time: `${currentMonth} ${day}, ${hour}:${minutes}${amPm} ${currentYear}`
    }
  }


  render() {
    return (
      <div>
        <h1>Time!</h1>
        <h4>{this.state.time}</h4>
      </div>
    )
  }
}

export default Time
