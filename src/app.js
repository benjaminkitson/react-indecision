const appObject = {
  title: "Random",
  subtitle: "Randomly choose stuff, I guess?"
}

  let options = []
  let optionsCount = options.length
  let selection = "Nothing added yet."

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
    if (options[num]) selection = options[num]
    render()
  }

  const app = (

    <div>
      <h1 class='test more-test'>{appObject.title}</h1>
      {appObject.subtitle && <p>{appObject.subtitle}</p>}
      <form onSubmit={submitFunc}>
      <input type="text" name="option"></input>
      <button>Add</button>
      </form>
      <p>{(options.length > 0) ? "Stuff that you want to randomly choose from:" : "Add some stuff!"}</p>
      <div className="list-div">
          <ol>
          {options.map((item,i) => {
            return <li key={i}>{item}</li>
          })}
          </ol>
        </div>
      <button onClick={select}>GENERATE</button>
      <h1>{selection}</h1>
      <button onClick={deleteAll}>Remove all</button>
    </div>

  );

  const content = document.getElementById('content');

  ReactDOM.render(app, content)
}

render();
