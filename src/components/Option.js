import React from 'react';

function Option(props) {

  const deleteOption = () => {
    props.deleteOption(props.option);
  };

  return (
    <li className="option">{props.option}<button className="button delete--button" onClick={deleteOption}>✕</button></li>
  );
}

export default Option;
