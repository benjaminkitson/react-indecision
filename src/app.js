class App extends React.Component {
  constructor(props) {
    super(props);
    this.resetOptions = this.resetOptions.bind(this);
    this.addOption = this.addOption.bind(this);
    this.generate = this.generate.bind(this);
    this.state = {
      options: ['testy'],
      selection: "Nothing yet."
    };
  }

  resetOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  addOption(option) {
    if (option) {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }

  generate() {
    const num = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => {
      return {
        selection: this.state.options[num]
      };
    });
  }

  render() {
    const title = 'Random';
    const subtitle = 'Randomly choose stuff, I guess?';
    return (
      <div className="app">
        <Header title={title} subtitle={subtitle}/>
        <Generate hasOptions={this.state.options.length > 0} generate={this.generate}/>
        <Options options={this.state.options} resetOptions={this.resetOptions}/>
        <AddOption options={this.state.options} addOption={this.addOption}/>
        <h1>{this.state.selection}</h1>
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>Randomly choose stuff, I guess?</h2>
      </div>
    );
  }
}


class Generate extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.generate} disabled={!this.props.hasOptions}>GENERATE</button>
      </div>
    );
  }
}


class Option extends React.Component {
  render() {
    return (
      <li>{this.props.option}</li>
    );
  }
}


class Options extends React.Component {

  render() {
    return (
      <div>
        <div className="list-div">
          <ol>
            {this.props.options.map(option => <Option key={option} option={option} />)}
          </ol>
          </div>
        <button onClick={this.props.resetOptions}>Reset</button>
      </div>
    );
  }
}


class AddOption extends React.Component {

  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
  }

  addOption(e) {
    e.preventDefault();
    const option = e.target.option.value.trim();
    this.props.addOption(option);
    e.target.option.value = '';
  }



  render() {
    return (
        <form onSubmit={this.addOption}>
          <input type="text" name="option"></input>
          <button>Add</button>
        </form>
    );
  }
}


const content = document.getElementById('content');

ReactDOM.render(<App/>, content);
