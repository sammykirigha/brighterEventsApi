"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _encrypt = _interopRequireDefault(require("../../lib/helpers/encrypt.js"));

var _jwtHelpers = _interopRequireDefault(require("../../lib/helpers/jwtHelpers.js"));

var _customError = _interopRequireDefault(require("../../lib/util/customError.js"));

var _index = require("../../config/index.js");

var _usersResource = require("./users.resource.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var config = (0, _index.getConfig)();

var UserService = /*#__PURE__*/function () {
  function UserService() {
    (0, _classCallCheck2.default)(this, UserService);
  }

  (0, _createClass2.default)(UserService, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(createUserBody) {
        var username, email, password, existingUser, encryptedPassword, createdUser, token, registeredUser;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                username = createUserBody.username, email = createUserBody.email, password = createUserBody.password;
                _context.next = 3;
                return _usersResource.userResource.getUser('email', email);

              case 3:
                existingUser = _context.sent;

                if (!existingUser) {
                  _context.next = 6;
                  break;
                }

                throw new _customError.default(401, 'User already exists');

              case 6:
                encryptedPassword = _encrypt.default.generateHash(password);
                _context.next = 9;
                return _usersResource.userResource.create({
                  username: username,
                  email: email,
                  password: encryptedPassword
                });

              case 9:
                createdUser = _context.sent;
                token = (0, _jwtHelpers.default)({
                  id: createdUser.id
                }, config.secretKey);
                registeredUser = _objectSpread(_objectSpread({}, createdUser), {}, {
                  token: token
                });
                return _context.abrupt("return", registeredUser);

              case 13:
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
    key: "login",
    value: function login(user) {
      var id = user.id;
      var token = (0, _jwtHelpers.default)({
        id: id
      }, config.secretKey);
      return token;
    }
  }, {
    key: "getMyUsers",
    value: function () {
      var _getMyUsers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var allUsers;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _usersResource.userResource.getUsers();

              case 2:
                allUsers = _context2.sent;
                console.log("all ", allUsers);
                return _context2.abrupt("return", allUsers);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getMyUsers() {
        return _getMyUsers.apply(this, arguments);
      }

      return getMyUsers;
    }()
  }]);
  return UserService;
}();

var userService = new UserService();
exports.userService = userService;