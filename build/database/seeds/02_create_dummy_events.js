"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seed = seed;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var EVENTS_TABLE = 'events';

function seed(_x) {
  return _seed.apply(this, arguments);
}

function _seed() {
  _seed = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(knex) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", knex(EVENTS_TABLE).del().then(function () {
              return knex(EVENTS_TABLE).insert([{
                title: 'graduation',
                description: 'my graduation ceremony',
                location: 'Karation',
                date: '2021-10-12',
                time: '08:00:00',
                created_by: 4
              }, {
                title: 'farewell',
                description: 'my uncles farewell part',
                location: 'Isiolo',
                date: '2021-07-27',
                time: '11:00:00',
                created_by: 4
              }, {
                title: 'wedding',
                description: 'a weeding ceremony for my uncle',
                location: 'Nakuru',
                date: '2021-12-12',
                time: '10:00:00',
                created_by: 2
              }, {
                title: 'birthday',
                description: 'my birthday party na mayengs ceremony',
                location: 'Kasarani',
                date: '2021-07-28',
                time: '12:00:00',
                created_by: 3
              }, {
                title: 'birthday',
                description: 'my birthday party after graduation',
                location: 'Taita',
                date: '2021-08-24',
                time: '12:00:00',
                created_by: 1
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