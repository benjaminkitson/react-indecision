"use strict";

var appObject = {
  title: "Random",
  subtitle: "Randomly choose stuff, I guess?"
};

var options = [];
var optionsCount = options.length;
var selection = "Nothing generated yet.";

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
    selection = "Nothing generated yet.";
    render();
  }

  function select() {
    var num = Math.floor(Math.random() * optionsCount);
    if (options[num]) selection = options[num];
    render();
  }

  var app = React.createElement(
    "div",
    { className: "react-app" },
    React.createElement(
      "h1",
      { "class": "test more-test" },
      appObject.title
    ),
    appObject.subtitle && React.createElement(
      "p",
      null,
      appObject.subtitle
    ),
    React.createElement(
      "form",
      { onSubmit: submitFunc },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add"
      )
    ),
    React.createElement(
      "h3",
      null,
      options.length > 0 ? "Stuff that you want to randomly choose from:" : "Add some stuff!"
    ),
    React.createElement(
      "div",
      { className: "list-div" },
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
      )
    ),
    React.createElement(
      "button",
      { onClick: select },
      "GENERATE"
    ),
    React.createElement(
      "h1",
      null,
      selection
    ),
    React.createElement(
      "button",
      { onClick: deleteAll },
      "Reset"
    )
  );

  var content = document.getElementById('content');

  ReactDOM.render(app, content);
}

render();
