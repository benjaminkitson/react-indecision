import React from 'react';

export default class Option extends React.Component {

  deleteOption = () => {
    this.props.deleteOption(this.props.option);
  };

  render() {
    return (
      <li>{this.props.option}<button onClick={this.deleteOption}>Delete</button></li>
    );
  }
}
