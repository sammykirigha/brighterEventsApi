"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _customError = _interopRequireDefault(require("../util/customError.js"));

var errorHandler = function errorHandler(err, req, res, next) {
  if (res.headerSent) {
    return next(err);
  }

  if (err instanceof _customError.default) {
    return res.status(err.statusCode).json({
      message: err.message
    });
  }

  var message = err.message || err.detail || err;
  return res.status(500).json({
    message: message
  });
};

var _default = errorHandler;
exports.default = _default;