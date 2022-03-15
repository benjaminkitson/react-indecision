import React from 'react';

export default class AddOption extends React.Component {

  addOption = (e) => {
    e.preventDefault();
    const option = e.target.option.value.trim();
    this.props.addOption(option);
    e.target.option.value = '';
  };

  render() {
    return (
      <form onSubmit={this.addOption} className="add-option">
        <input className="add-option__input" type="text" name="option"></input>
        <button className="button">Add</button>
      </form>
    );
  }
}
