"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _index = require("../config/index.js");

// Update with your config settings.
var _getConfig = (0, _index.getConfig)(),
    env = _getConfig.env,
    _getConfig$db = _getConfig.db,
    name = _getConfig$db.name,
    username = _getConfig$db.username,
    password = _getConfig$db.password,
    host = _getConfig$db.host;

var defaultOptions = {
  client: 'pg',
  connection: "postgresql://".concat(username, ":").concat(password, "@").concat(host, "/").concat(name),
  migrations: {
    directory: _path.default.join(_path.default.dirname('.'), 'migrations')
  }
};
var configs = {
  development: defaultOptions,
  staging: defaultOptions,
  production: defaultOptions,
  local: defaultOptions,
  test: defaultOptions
};

if (configs[env] === undefined) {
  throw Error("Missing configuration for environment: ".concat(env));
}

var _default = configs;
exports.default = _default;