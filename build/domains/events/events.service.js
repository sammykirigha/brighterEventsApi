"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventsService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _eventsResource = require("./events.resource.js");

var EventsService = /*#__PURE__*/function () {
  function EventsService() {
    (0, _classCallCheck2.default)(this, EventsService);
  }

  (0, _createClass2.default)(EventsService, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(createEventBody) {
        var event;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event = _eventsResource.eventsResource.create(createEventBody);
                return _context.abrupt("return", event);

              case 2:
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
      var _getEvents = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(reqQuery) {
        var events, _reqQuery$page, page, _reqQuery$limit, limit, offset;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!reqQuery.name) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 3;
                return _eventsResource.eventsResource.getEventByName(reqQuery.name);

              case 3:
                events = _context2.sent;
                _context2.next = 17;
                break;

              case 6:
                if (!reqQuery.id) {
                  _context2.next = 12;
                  break;
                }

                _context2.next = 9;
                return _eventsResource.eventsResource.getEventById(reqQuery.id);

              case 9:
                events = _context2.sent;
                _context2.next = 17;
                break;

              case 12:
                _reqQuery$page = reqQuery.page, page = _reqQuery$page === void 0 ? 1 : _reqQuery$page, _reqQuery$limit = reqQuery.limit, limit = _reqQuery$limit === void 0 ? 10 : _reqQuery$limit;
                offset = (page - 1) * limit;
                _context2.next = 16;
                return _eventsResource.eventsResource.getEvents(offset, limit);

              case 16:
                events = _context2.sent;

              case 17:
                return _context2.abrupt("return", events);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getEvents(_x2) {
        return _getEvents.apply(this, arguments);
      }

      return getEvents;
    }()
  }, {
    key: "updateEvent",
    value: function () {
      var _updateEvent = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(updateBody, eventId) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _eventsResource.eventsResource.updateEvent(updateBody, eventId));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function updateEvent(_x3, _x4) {
        return _updateEvent.apply(this, arguments);
      }

      return updateEvent;
    }()
  }, {
    key: "deleteEvent",
    value: function () {
      var _deleteEvent = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(eventId) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", _eventsResource.eventsResource.deleteEvent(eventId));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteEvent(_x5) {
        return _deleteEvent.apply(this, arguments);
      }

      return deleteEvent;
    }()
  }]);
  return EventsService;
}();

var eventsService = new EventsService();
exports.eventsService = eventsService;