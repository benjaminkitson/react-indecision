import React from 'react';

export default class Option extends React.Component {

  deleteOption = () => {
    this.props.deleteOption(this.props.option);
  };

  render() {
    return (
      <li className="option">{this.props.option}<button className="button delete--button" onClick={this.deleteOption}>Delete</button></li>
    );
  }
}
