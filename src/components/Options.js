import React from 'react';
import Option from './Option';

function Options(props) {
  return (
    <div>
      <div className="options-list">
        <ol>
          {props.options.map(option => <Option key={option} option={option} deleteOption={props.deleteOption} />)}
        </ol>
      </div>
      <button className="reset-button button" onClick={props.resetOptions}>Reset</button>
    </div>
  );
}

export default Options;
