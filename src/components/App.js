import React from 'react';
import Header from './Header';
import Generate from './Generate';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class App extends React.Component {

  state = {
    options: [],
    selection: 'Nothing yet.',
    selectedOption: undefined
  };

  componentDidMount() {
    // To complete later (localStorage etc)
  }

  componentDidUpdate(prevState, prevProps) {
    // To complete later (localStorage etc)
  }

  componentWillUnmount() {
    // To complete later (localStorage etc)
  }

  resetOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  addOption = (option) => {
    if (option && !this.state.options.includes(option)) {
      this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    } else if (this.state.options.includes(option)) {
      this.setState(() => ({ selection: 'No duplicates please!' }));
    }
  };

  deleteOption = (option) => {
    this.setState((prevState) => ({ options: prevState.options.filter(item => item !== option) }));
  };

  clearGenerated = () => {
    this.setState(() => ({selectedOption: undefined}));
  };

  generate = () => {
    const num = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({ selectedOption: this.state.options[num] }));
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Options options={this.state.options} resetOptions={this.resetOptions} deleteOption={this.deleteOption} />
        <AddOption options={this.state.options} addOption={this.addOption} />
        <h1>{this.state.selection}</h1>
        <OptionModal selectedOption={this.state.selectedOption} clearGenerated={this.clearGenerated}/>
        <Generate hasOptions={this.state.options.length > 0} generate={this.generate} />
      </div>
    );
  }
}
