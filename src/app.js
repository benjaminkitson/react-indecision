const appObject = {
  title: "Title",
  subtitle: "Subtitle",
  options: ['One', 'Two']
}

  let options = []
  let optionsCount = options.length
  let selection

function render() {

  function submitFunc(e) {
    e.preventDefault()
    let text = e.target.elements.option.value

    if (text) {
      options.push(text)
      optionsCount = options.length
      console.log(optionsCount)
      e.target.elements.option.value = ''
    }

    render()
  }

  function deleteAll() {
    options = [];
    optionsCount = options.length;
    render()
  }

  function select() {
    const num = Math.floor(Math.random()*optionsCount)
    selection = options[num]
    render()
  }

  const app = (

    <div>
      <h1 class='test more-test'>{appObject.title}</h1>
      {appObject.subtitle && <p>{appObject.subtitle}</p>}
      <p>{(appObject.options.length > 0) ? "Here are your options" : "No options"}</p>
      <ol>
      {options.map((item,i) => {
        return <li key={i}>{item}</li>
      })}
      </ol>
      <button onClick={select}>What should I do?</button>
      <h1>{selection}</h1>
      <button onClick={deleteAll}>Remove all</button>
      <form onSubmit={submitFunc}>
        <input type="text" name="option"></input>
        <button>Submit</button>
      </form>
    </div>

  );

  const content = document.getElementById('content');

  ReactDOM.render(app, content)
}

render();
