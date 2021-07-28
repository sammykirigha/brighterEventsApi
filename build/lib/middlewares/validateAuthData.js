"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("validate"));

var authData = {
  email: {
    type: String,
    required: true,
    message: 'please provide a valid email',
    unique: true
  },
  password: {
    type: String,
    required: true,
    length: {
      min: 6,
      max: 12
    }
  }
};

var validateAuthData = function validateAuthData(req, res, next) {
  var userData = new _validate.default(authData);
  var errors = userData.validate(req.body);

  if (errors.length) {
    return res.status(400).json({
      message: errors[o].message
    });
  }

  next();
};

var _default = validateAuthData;
exports.default = _default;