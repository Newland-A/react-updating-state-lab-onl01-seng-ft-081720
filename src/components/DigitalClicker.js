// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = { //sets default state
      timesClicked: 0
    }
  }
  handleClick = () => {
    this.setState(previousState => ({// handles the click event
      timesClicked: previousState.timesClicked + 1
    }))
  }
   
  render() {
    return ( // listens to the click event and updates the state of timesClicked
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }


}