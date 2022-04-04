import React from 'react';
import Header from './Header';
import Generate from './Generate';
import Options from './Options';
import AddOption from './AddOption';
import { useState, useEffect } from 'react';
import RandomContext from '../contexts/random';

function Content() {

  const [selected, setSelected] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('options'));
    console.log(stored);
    if (stored) setOptions(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('options', JSON.stringify(options));
  });

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

  const utils = {
    options,
    selected,
    resetOptions,
    addOption,
    deleteOption,
    generate,
    hasOptions: options.length > 0
  };

  return (
    <RandomContext.Provider value={utils}>
      <div className="content">
        <Header />
        <Options options={options} resetOptions={resetOptions} deleteOption={deleteOption} />
        <AddOption options={options} addOption={addOption} />
        <h1 className="selection">{selected}</h1>
        <Generate hasOptions={options.length > 0} generate={generate} />
      </div>
    </RandomContext.Provider>
  );
}

export default Content;
