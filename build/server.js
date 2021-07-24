"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _fancyLog = _interopRequireDefault(require("fancy-log"));

var _app = _interopRequireDefault(require("./app.js"));

var _index = require("./config/index.js");

;

_app.default.start((0, _index.getConfig)(), _fancyLog.default);