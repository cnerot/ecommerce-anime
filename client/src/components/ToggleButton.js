import React, { Component } from 'react';

class ToggleButton extends Component {
  render() {
    const props = this.props;
    return (
      <button 
      style={{ 
        backgroundColor: "red",
        height: 100
      }}
      onClick={props.onClick}
      >toogle {props.theme} </button>
    );
  }
}

export default ToggleButton;
