"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.knexInstance = void 0;

var _knex = _interopRequireDefault(require("knex"));

var _knexStringcase = _interopRequireDefault(require("knex-stringcase"));

var _index = require("../config/index.js");

var _knexfile = _interopRequireDefault(require("./knexfile"));

var config = _knexfile.default[(0, _index.getConfig)().env];

if (!config) {
  throw new Error('Missing database config');
}

var knexInstance = (0, _knex.default)((0, _knexStringcase.default)(config));
exports.knexInstance = knexInstance;