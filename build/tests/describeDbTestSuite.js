"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.describeDbTestSuite = describeDbTestSuite;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _knexCleaner = _interopRequireDefault(require("knex-cleaner"));

var _index = require("../config/index.js");

var _knexInstance = require("../database/knexInstance.js");

var _knexfile = _interopRequireDefault(require("../database/knexfile.js"));

var envConfig = (0, _index.getConfig)();

if (envConfig.env !== 'test' || envConfig.db.name !== 'events-test') {
  throw new Error('Not in test environment');
}

var config = _knexfile.default[envConfig.env];
var knexCleanerOptions = {
  ignoreTables: ['knex_migrations', 'knex_migrations_lock']
};

function describeDbTestSuite(name, func) {
  describe(name, function () {
    beforeAll( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _knexInstance.knexInstance.migrate.rollback(config.migrations, true);

            case 2:
              _context.next = 4;
              return _knexInstance.knexInstance.migrate.latest(config.migrations);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    beforeEach( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _knexCleaner.default.clean(_knexInstance.knexInstance, knexCleanerOptions);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    afterEach( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _knexCleaner.default.clean(_knexInstance.knexInstance, knexCleanerOptions);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    afterAll( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _knexInstance.knexInstance.migrate.rollback(config.migrations, true);

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
    func(_knexInstance.knexInstance);
  });
}