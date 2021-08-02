"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userResource = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _knexInstance = require("../../database/knexInstance.js");

var USERS_TABLE = 'users';

var UserResource = /*#__PURE__*/function () {
  function UserResource() {
    (0, _classCallCheck2.default)(this, UserResource);
  }

  (0, _createClass2.default)(UserResource, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(createUserBody) {
        var created;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _knexInstance.knexInstance)(USERS_TABLE).insert(createUserBody, '*');

              case 2:
                created = _context.sent;
                return _context.abrupt("return", created[0]);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "getUser",
    value: function () {
      var _getUser = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(field, value) {
        var query, user;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = (0, _knexInstance.knexInstance)(USERS_TABLE).where(field, value).first();
                console.log(query.toString());
                _context2.next = 4;
                return query;

              case 4:
                user = _context2.sent;
                return _context2.abrupt("return", user);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getUser(_x2, _x3) {
        return _getUser.apply(this, arguments);
      }

      return getUser;
    }()
  }, {
    key: "getUsers",
    value: function () {
      var _getUsers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var users;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _knexInstance.knexInstance)(USERS_TABLE).select('*');

              case 2:
                users = _context3.sent;
                return _context3.abrupt("return", users);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getUsers() {
        return _getUsers.apply(this, arguments);
      }

      return getUsers;
    }()
  }]);
  return UserResource;
}();

var userResource = new UserResource();
exports.userResource = userResource;