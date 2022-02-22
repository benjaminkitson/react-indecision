'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.resetOptions = _this.resetOptions.bind(_this);
    _this.addOption = _this.addOption.bind(_this);
    _this.generate = _this.generate.bind(_this);
    _this.state = {
      options: ['testy'],
      selection: "Nothing yet."
    };
    return _this;
  }

  _createClass(App, [{
    key: 'resetOptions',
    value: function resetOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'addOption',
    value: function addOption(option) {
      if (option) {
        this.setState(function (prevState) {
          return {
            options: prevState.options.concat(option)
          };
        });
      }
    }
  }, {
    key: 'generate',
    value: function generate() {
      var _this2 = this;

      var num = Math.floor(Math.random() * this.state.options.length);
      this.setState(function () {
        return {
          selection: _this2.state.options[num]
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Random';
      var subtitle = 'Randomly choose stuff, I guess?';
      return React.createElement(
        'div',
        { className: 'app' },
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Generate, { hasOptions: this.state.options.length > 0, generate: this.generate }),
        React.createElement(Options, { options: this.state.options, resetOptions: this.resetOptions }),
        React.createElement(AddOption, { options: this.state.options, addOption: this.addOption }),
        React.createElement(
          'h1',
          null,
          this.state.selection
        )
      );
    }
  }]);

  return App;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h2',
          null,
          'Randomly choose stuff, I guess?'
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Generate = function (_React$Component3) {
  _inherits(Generate, _React$Component3);

  function Generate() {
    _classCallCheck(this, Generate);

    return _possibleConstructorReturn(this, (Generate.__proto__ || Object.getPrototypeOf(Generate)).apply(this, arguments));
  }

  _createClass(Generate, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.props.generate, disabled: !this.props.hasOptions },
          'GENERATE'
        )
      );
    }
  }]);

  return Generate;
}(React.Component);

var Option = function (_React$Component4) {
  _inherits(Option, _React$Component4);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        null,
        this.props.option
      );
    }
  }]);

  return Option;
}(React.Component);

var Options = function (_React$Component5) {
  _inherits(Options, _React$Component5);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'list-div' },
          React.createElement(
            'ol',
            null,
            this.props.options.map(function (option) {
              return React.createElement(Option, { key: option, option: option });
            })
          )
        ),
        React.createElement(
          'button',
          { onClick: this.props.resetOptions },
          'Reset'
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this7 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this7.addOption = _this7.addOption.bind(_this7);
    return _this7;
  }

  _createClass(AddOption, [{
    key: 'addOption',
    value: function addOption(e) {
      e.preventDefault();
      var option = e.target.option.value.trim();
      this.props.addOption(option);
      e.target.option.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.addOption },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
          'button',
          null,
          'Add'
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var content = document.getElementById('content');

ReactDOM.render(React.createElement(App, null), content);
