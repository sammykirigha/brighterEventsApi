"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAuthData = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _expressValidator = require("express-validator");

var ValidateAuthData = function ValidateAuthData() {
  (0, _classCallCheck2.default)(this, ValidateAuthData);
  (0, _defineProperty2.default)(this, "registerValidator", function () {
    return [(0, _expressValidator.check)('username').notEmpty().withMessage('username is required').not().custom(function (val) {
      return /[^A-za-z0-9\s]/g.test(val);
    }).withMessage('username should not use uniq characters'), (0, _expressValidator.check)('email').notEmpty().withMessage('Email is required to register'), (0, _expressValidator.check)('password').notEmpty().withMessage('password is required').isLength({
      min: 8
    }).withMessage('password must be 8 characters')];
  });
  (0, _defineProperty2.default)(this, "loginValidator", function () {
    return [(0, _expressValidator.check)('email').notEmpty().withMessage('Email is required'), (0, _expressValidator.check)('password').notEmpty().withMessage('password is required')];
  });
};

var validateAuthData = new ValidateAuthData();
exports.validateAuthData = validateAuthData;