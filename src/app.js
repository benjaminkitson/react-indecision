class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Random</h1>
        <h2>Randomly choose stuff, I guess?</h2>
      </div>
    )
  }
}

const app = (
  <Header/>
);

const content = document.getElementById('content');

ReactDOM.render(app, content)
