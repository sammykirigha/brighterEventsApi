"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jwtAuthentication = exports.localAuthentication = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _passport = _interopRequireDefault(require("passport"));

var _encrypt = _interopRequireDefault(require("../helpers/encrypt.js"));

var _customError = _interopRequireDefault(require("./customError.js"));

var _index = require("../../config/index.js");

var _usersResource = require("../../domains/accounts/users.resource.js");

var _require = require('passport-jwt'),
    JwtStrategy = _require.Strategy,
    ExtractJwt = _require.ExtractJwt;

var _require2 = require('passport-local'),
    LocalStrategy = _require2.Strategy;

var config = (0, _index.getConfig)();

_passport.default.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(email, password, done) {
    var user, passwordMatch;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _usersResource.userResource.getUser('email', email);

          case 3:
            user = _context.sent;

            if (user) {
              _context.next = 6;
              break;
            }

            throw new _customError.default(400, 'Invalid credentials');

          case 6:
            _context.next = 8;
            return _encrypt.default.compareHash(password, user.password);

          case 8:
            passwordMatch = _context.sent;

            if (passwordMatch) {
              _context.next = 11;
              break;
            }

            throw new _customError.default(400, 'Invalid credentials');

          case 11:
            return _context.abrupt("return", done(null, user));

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", done(_context.t0));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()));

_passport.default.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secretKey,
  jsonWebTokenOptions: {
    maxAge: config.jwtExpiration
  }
}, function (jwtPayload, done) {
  return done(null, jwtPayload);
}));

var localAuthentication = _passport.default.authenticate('local', {
  session: false
});

exports.localAuthentication = localAuthentication;

var jwtAuthentication = function jwtAuthentication(req, res, next) {
  _passport.default.authenticate('jwt', {
    session: false
  }, function (err, user) {
    if (err || !user) throw new _customError.default(401, 'please login to continue');
    req.user = user;
    next();
  })(req, res, next);
};

exports.jwtAuthentication = jwtAuthentication;