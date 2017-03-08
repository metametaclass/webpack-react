import React from 'react'

export class Border extends React.Component {
  constructor (props){
    super(props);   
  }

  render(){
    return (
      <div className="with-border">
        {this.props.children}
      </div>
    );
  }
}