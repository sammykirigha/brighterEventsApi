"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _globalErrorHandle = _interopRequireDefault(require("./lib/middlewares/globalErrorHandle.js"));

var _usersRoutes = require("./domains/accounts/users.routes.js");

var App = /*#__PURE__*/function () {
  function App() {
    (0, _classCallCheck2.default)(this, App);
    (0, _defineProperty2.default)(this, "routes", []);
  }

  (0, _createClass2.default)(App, [{
    key: "addApiRoute",
    value: function addApiRoute(route) {
      this.routes.push(route);
      return this;
    }
  }, {
    key: "createExpressApp",
    value: function createExpressApp() {
      var app = (0, _express.default)();
      app.use(_express.default.json());
      this.addApiRoute((0, _usersRoutes.getUsersRouter)());

      if (app.get('env') === 'development') {
        app.use((0, _morgan.default)('dev'));
      }

      if (this.routes.length !== 0) {
        this.routes.forEach(function (route) {
          app.use(route);
        });
      } //errorhandler should be added as the last middleware to the app


      app.use(_globalErrorHandle.default);
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