import React from 'react'

import { Toggle } from './toggle'

export class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date(), counter: 0};
  }

  render() {
    return (
      <div>
        <Toggle />
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <div>{this.state.counter}</div>
      </div>
    );
  }

  componentDidMount() {
  	this.timerID = setInterval(
      () => this.tick(),
      50
    );
  }

  componentWillUnmount() {
  	clearInterval(this.timerID);
  }

  tick() {
  	this.setState((prevState, props) => ({
  		counter: prevState.counter + 1,
  		date: new Date()
	}));
  }
}
