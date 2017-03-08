import React from 'react'

export class Toggle extends React.Component {

  /*
  //need  https://babeljs.io/docs/plugins/transform-class-properties/
  handleClick1 = () => {
    console.log('this is:', this);
  }*/

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
      {/*
      <button onClick={this.handleClick1}>
        {'test'}
      </button>
      */}
      </div>
    );
  }
}