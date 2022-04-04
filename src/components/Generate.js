import React, { useContext } from 'react';
import RandomContext from '../contexts/random';

function Generate() {

  const { generate, hasOptions } = useContext(RandomContext);

  return (
    <div>
      <button className="button button--generate" onClick={generate} disabled={!hasOptions}>GENERATE</button>
    </div>
  );
}

export default Generate;
