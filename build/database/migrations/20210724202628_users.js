"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up = up;
exports.down = down;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _addTablestamps = require("../addTablestamps.js");

var USERS_TABLE = 'users';

function createUuidExtension(_x) {
  return _createUuidExtension.apply(this, arguments);
}

function _createUuidExtension() {
  _createUuidExtension = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(knex) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return knex.raw('create extension if not exists "uuid-ossp"');

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createUuidExtension.apply(this, arguments);
}

function createUsersTable(_x2) {
  return _createUsersTable.apply(this, arguments);
}

function _createUsersTable() {
  _createUsersTable = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(knex) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return knex.schema.createTable(USERS_TABLE, function (table) {
              table.string('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
              table.string('username').notNullable();
              table.string('email').unique().notNullable();
              table.string('password').notNullable();
            });

          case 2:
            _context2.next = 4;
            return (0, _addTablestamps.addTableTimestamps)(knex, USERS_TABLE);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createUsersTable.apply(this, arguments);
}

function up(_x3) {
  return _up.apply(this, arguments);
}

function _up() {
  _up = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(knex) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return createUuidExtension(knex);

          case 2:
            _context3.next = 4;
            return createUsersTable(knex);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _up.apply(this, arguments);
}

function down(_x4) {
  return _down.apply(this, arguments);
}

function _down() {
  _down = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(knex) {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return knex.schema.dropTable(USERS_TABLE);

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _down.apply(this, arguments);
}