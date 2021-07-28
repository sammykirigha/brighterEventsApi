"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var createToken = function createToken(payload, secretKey, expiresIn) {
  _jsonwebtoken.default.sign(payload, secretKey, expiresIn);
};

var _default = createToken;
exports.default = _default;