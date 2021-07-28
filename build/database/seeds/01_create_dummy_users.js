"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seed = seed;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function seed(_x) {
  return _seed.apply(this, arguments);
}

function _seed() {
  _seed = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(knex) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", knex('users').del().then(function () {
              return knex('users').insert([{
                id: 1,
                username: 'John Doe',
                email: 'johndoe@example.com',
                password: "password1"
              }, {
                id: 2,
                username: 'Will Smith',
                email: 'willsmith@example.com',
                password: "password2"
              }, {
                id: 3,
                username: 'Jane Doe',
                email: 'janedoe@example.com',
                password: "password3"
              }, {
                id: 4,
                username: 'Sam Doe',
                email: 'samdoe@example.com',
                password: "password4"
              }]);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _seed.apply(this, arguments);
}

;