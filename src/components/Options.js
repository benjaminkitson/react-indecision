import React from 'react';
import Option from './Option';

function Options(props) {
  return (
    <div>
      <div className="list-div">
        <ol>
          {props.options.map(option => <Option key={option} option={option} deleteOption={props.deleteOption} />)}
        </ol>
      </div>
      <button onClick={props.resetOptions}>Reset</button>
    </div>
  );
}

export default Options;
