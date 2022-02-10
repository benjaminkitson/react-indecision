"use strict";

var app = {
  title: "title",
  subtitle: "subtitle"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    { "class": "test more-test" },
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.dummy ? app.dummy : "Doesn't exist"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item 1"
    ),
    React.createElement(
      "li",
      null,
      "Item 2"
    )
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
