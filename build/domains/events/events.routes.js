"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventsRouter = getEventsRouter;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _protectedAsyncHandler = require("../../lib/util/protectedAsyncHandler.js");

var _eventsService = require("./events.service.js");

function getEventsRouter() {
  var eventsRouter = (0, _express.Router)();
  eventsRouter.post('/events', (0, _protectedAsyncHandler.protectedAsyncRequestHandler)( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
      var event;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _eventsService.eventsService.create(req.body);

            case 2:
              event = _context.sent;
              res.status(201).json({
                message: 'event created',
                event: event
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()));
  eventsRouter.put('/events/:id', (0, _protectedAsyncHandler.protectedAsyncRequestHandler)( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
      var updatedEvent;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _eventsService.eventsService.updateEvent(req.body, req.params.id);

            case 2:
              updatedEvent = _context2.sent;
              res.status(200).json({
                message: 'event updated',
                event: updatedEvent
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }()));
  eventsRouter.get('/events', (0, _protectedAsyncHandler.protectedAsyncRequestHandler)( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
      var events;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _eventsService.eventsService.getEvents(req.query);

            case 2:
              events = _context3.sent;
              res.status(200).json({
                message: 'success',
                events: events
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }()));
  eventsRouter.delete('/events/:id', (0, _protectedAsyncHandler.protectedAsyncRequestHandler)( /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _eventsService.eventsService.deleteEvent(req.params.id);

            case 2:
              res.status(200).json({
                message: 'event deleted successfully'
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }()));
  return eventsRouter;
}