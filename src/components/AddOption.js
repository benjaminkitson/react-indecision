import React from 'react';

function AddOption() {

  const addOption = (e) => {
    e.preventDefault();
    const option = e.target.option.value.trim();
    this.props.addOption(option);
    e.target.option.value = '';
  };

  return (
    <form onSubmit={addOption} className="add-option">
      <input className="add-option__input" type="text" name="option"></input>
      <button className="button">Add</button>
    </form>
  );
}

export default AddOption;
