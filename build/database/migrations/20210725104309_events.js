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

var EVENTS_TABLE = 'events';
var USERS_TABLE = 'users';

function createEventsTable(_x) {
  return _createEventsTable.apply(this, arguments);
}

function _createEventsTable() {
  _createEventsTable = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(knex) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return knex.schema.createTable(EVENTS_TABLE, function (table) {
              table.string('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
              table.string('title').notNullable();
              table.string('description').notNullable();
              table.string('location').notNullable();
              table.date('date').notNullable();
              table.time('time').notNullable();
              table.string('created_by').references('id').inTable(USERS_TABLE).notNullable().onDelete('cascade');
            });

          case 2:
            _context.next = 4;
            return (0, _addTablestamps.addTableTimestamps)(knex, EVENTS_TABLE);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createEventsTable.apply(this, arguments);
}

function up(_x2) {
  return _up.apply(this, arguments);
}

function _up() {
  _up = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(knex) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return createEventsTable(knex);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _up.apply(this, arguments);
}

function down(_x3) {
  return _down.apply(this, arguments);
}

function _down() {
  _down = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(knex) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return knex.schema.dropTable(EVENTS_TABLE);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _down.apply(this, arguments);
}