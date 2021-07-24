"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var App = /*#__PURE__*/function () {
  function App() {
    (0, _classCallCheck2.default)(this, App);
  }

  (0, _createClass2.default)(App, [{
    key: "createExpressApp",
    value: function createExpressApp() {
      var app = (0, _express.default)();
      app.use(_express.default.json);

      if (app.get('env') === 'development') {
        app.use((0, _morgan.default)('dev'));
      }

      return app;
    }
  }, {
    key: "start",
    value: function start(config, logger) {
      var app = this.createExpressApp();
      app.listen(config.port, function () {
        logger.info("app running on port ".concat(config.port));
      });
    }
  }]);
  return App;
}();

var app = new App();
var _default = app;
exports.default = _default;