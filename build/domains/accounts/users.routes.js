"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsersRouter = getUsersRouter;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _protectedAsyncHandler = require("../../lib/util/protectedAsyncHandler.js");

var _validateAuthData = _interopRequireDefault(require("../../lib/middlewares/validateAuthData.js"));

var _usersService = require("./users.service.js");

var _passportSetup = require("../..lib/util/passportSetup.js");

function getUsersRouter() {
  var usersRouter = (0, _express.Router)();
  usersRouter.post('/signup', _validateAuthData.default, (0, _protectedAsyncHandler.protectedAsyncRequestHandler)( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
      var user;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _usersService.userService.create(req.body);

            case 2:
              user = _context.sent;
              res.status(201).json({
                message: 'Account created',
                token: user.token
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()));
  usersRouter.post('/login', _validateAuthData.default, _passportSetup.localAuthentication, function (req, res) {
    var token = _usersService.userService.login(req.user);

    res.status(200).json({
      message: 'Logged In successfully',
      token: token
    });
  });
  return usersRouter;
}