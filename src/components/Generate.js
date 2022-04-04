import React from 'react';

function Generate(props) {

  return (
    <div>
      <button className="button button--generate" onClick={props.generate} disabled={!props.hasOptions}>GENERATE</button>
    </div>
  );
}

export default Generate;
