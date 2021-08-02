"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _encrypt = _interopRequireDefault(require("./encrypt.js"));

describe('EncryData', function () {
  test('it should encrypt a string and return a hash', function () {
    var originalString = 'myPassword';

    var hashedString = _encrypt.default.generateHash(originalString);

    expect(originalString).not.toEqual(String(hashedString));
  });
  test('it should return true if the hash matchs the original string', /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var originalString, hashedString, isMatch;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            originalString = 'myPassword';
            hashedString = _encrypt.default.generateHash(originalString);
            _context.next = 4;
            return _encrypt.default.compareHash(originalString, hashedString);

          case 4:
            isMatch = _context.sent;
            expect(isMatch).toBeTruthy();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('it should return false if a hash does not match the original string', /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var hashedString, isMatch;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            hashedString = _encrypt.default.generateHash('myPassword');
            _context2.next = 3;
            return _encrypt.default.compareHash('someRandomString', hashedString);

          case 3:
            isMatch = _context2.sent;
            expect(isMatch).toBeFalsy();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});