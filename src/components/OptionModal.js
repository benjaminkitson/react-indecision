import React from 'react';
import Modal from 'react-modal';

function OptionModal(props) {
  return (
    <Modal isOpen={!!props.selectedOption} contentLabel={"Modal"}>
      <h3>Selected:</h3>
      <p>{props.selectedOption}</p>
      <button onClick={props.clearGenerated}>Close</button>
    </Modal>
  );
}

export default OptionModal;
