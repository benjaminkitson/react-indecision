import React from 'react';
import Header from './Header';
import Generate from './Generate';
import Options from './Options';
import AddOption from './AddOption';
import { useState } from 'react';

function Content() {

  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState('');

  const resetOptions = () => {
    setOptions([]);
  };

  const addOption = (option) => {
    if (option && !options.includes(option)) {
      setOptions(options.concat(option));
      setSelected('Add some more stuff!');
    } else if (options.includes(option)) {
      setSelected('No duplicates please!');
    }
  };

  const deleteOption = (option) => {
    setOptions(options.filter(item => item !== option));
  };

  const clearGenerated = () => {
    setSelected('Nothing yet.');
  };

  const generate = () => {
    const num = Math.floor(Math.random() * options.length);
    setSelected(options[num]);
  };

  return (
    <div className="content">
      <Header />
      <Options options={options} resetOptions={resetOptions} deleteOption={deleteOption} />
      <AddOption options={options} addOption={addOption} />
      <h1 className="selection">{selected}</h1>
      <Generate hasOptions={options.length > 0} generate={generate} />
    </div>
  );
}

export default Content;
