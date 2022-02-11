"use strict";

var app = {
  title: "Title",
  subtitle: "Subtitle",
  options: ['One', 'Two']
};

var options = [];
var optionsCount = options.length;
var selection = void 0;

function render() {

  function submitFunc(e) {
    e.preventDefault();
    var text = e.target.elements.option.value;

    if (text) {
      options.push(text);
      optionsCount = options.length;
      console.log(optionsCount);
      e.target.elements.option.value = '';
    }

    render();
  }

  function deleteAll() {
    options = [];
    optionsCount = options.length;
    render();
  }

  function select() {
    var num = Math.floor(Math.random() * optionsCount);
    selection = options[num];
    render();
  }

  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { "class": "test more-test" },
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "h3",
      null,
      optionsCount
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      "ol",
      null,
      options.map(function (item, i) {
        return React.createElement(
          "li",
          { key: i },
          item
        );
      })
    ),
    React.createElement(
      "button",
      { onClick: select },
      "What should I do?"
    ),
    React.createElement(
      "h1",
      null,
      selection
    ),
    React.createElement(
      "button",
      { onClick: deleteAll },
      "Remove all"
    ),
    React.createElement(
      "form",
      { onSubmit: submitFunc },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Submit"
      )
    )
  );

  var appRoot = document.getElementById('app');

  ReactDOM.render(template, appRoot);
}

render();
