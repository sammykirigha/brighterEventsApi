"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventsResource = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _knexInstance = require("../../database/knexInstance.js");

var _eventsErrors = require("./events.errors.js");

var EVENTS_TABLE = 'events';

var EventsResource = /*#__PURE__*/function () {
  function EventsResource() {
    (0, _classCallCheck2.default)(this, EventsResource);
  }

  (0, _createClass2.default)(EventsResource, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(createEventBody) {
        var created;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _knexInstance.knexInstance)(EVENTS_TABLE).insert(createEventBody, '*');

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
    key: "getEvents",
    value: function () {
      var _getEvents = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(offset, limit) {
        var events;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _knexInstance.knexInstance)(EVENTS_TABLE).select('*').offset(offset).limit(limit);

              case 2:
                events = _context2.sent;
                return _context2.abrupt("return", events);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getEvents(_x2, _x3) {
        return _getEvents.apply(this, arguments);
      }

      return getEvents;
    }()
  }, {
    key: "getEventById",
    value: function () {
      var _getEventById = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(eventId) {
        var event;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _knexInstance.knexInstance)(EVENTS_TABLE).select('*').where('id', eventId).first();

              case 2:
                event = _context3.sent;

                if (event) {
                  _context3.next = 5;
                  break;
                }

                throw new _eventsErrors.EventNotFoundError(404, "no event with id ".concat(eventId, " found"));

              case 5:
                return _context3.abrupt("return", event);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getEventById(_x4) {
        return _getEventById.apply(this, arguments);
      }

      return getEventById;
    }()
  }, {
    key: "getEventByName",
    value: function () {
      var _getEventByName = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(title) {
        var event;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _knexInstance.knexInstance)(EVENTS_TABLE).select('*').where('title', title).first();

              case 2:
                event = _context4.sent;

                if (event) {
                  _context4.next = 5;
                  break;
                }

                throw new _eventsErrors.EventNotFoundError(404, "no event with title ".concat(title, " found "));

              case 5:
                return _context4.abrupt("return", event);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getEventByName(_x5) {
        return _getEventByName.apply(this, arguments);
      }

      return getEventByName;
    }()
  }, {
    key: "updateEvent",
    value: function () {
      var _updateEvent = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(updateBody, eventId) {
        var event, updatedEvent;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                event = updateBody;
                _context5.next = 3;
                return (0, _knexInstance.knexInstance)(EVENTS_TABLE).update(event).where('id', eventId).returning(['id', 'title', 'description', 'location', 'date', 'time']);

              case 3:
                updatedEvent = _context5.sent;
                return _context5.abrupt("return", updatedEvent[0]);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function updateEvent(_x6, _x7) {
        return _updateEvent.apply(this, arguments);
      }

      return updateEvent;
    }()
  }, {
    key: "deleteEvent",
    value: function () {
      var _deleteEvent = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(eventId) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _knexInstance.knexInstance)(EVENTS_TABLE).where('id', eventId).delete();

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function deleteEvent(_x8) {
        return _deleteEvent.apply(this, arguments);
      }

      return deleteEvent;
    }()
  }]);
  return EventsResource;
}();

var eventsResource = new EventsResource();
exports.eventsResource = eventsResource;