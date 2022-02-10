const app = {
  title: "title",
  subtitle: "subtitle"
}

const template = (

  <div>
    <h1 class='test more-test'>{app.title}</h1>
    <p>{app.subtitle}</p>
    <p>{app.dummy ? app.dummy : "Doesn't exist"}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>

);


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
