import React, { useContext } from 'react';
import Option from './Option';
import RandomContext from '../contexts/random';

function Options() {

  const { options, resetOptions } = useContext(RandomContext);

  return (
    <div>
      <div className="options-list">
        <ol>
          {options.map(option => <Option key={option} option={option} />)}
        </ol>
      </div>
      <button className="reset-button button" onClick={resetOptions}>Reset</button>
    </div>
  );
}

export default Options;
