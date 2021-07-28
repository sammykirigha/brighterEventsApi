"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTableTimestamps = addTableTimestamps;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function addTableTimestamps(_x, _x2) {
  return _addTableTimestamps.apply(this, arguments);
}

function _addTableTimestamps() {
  _addTableTimestamps = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(knex, tableName) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return knex.schema.alterTable(tableName, function (table) {
              table.timestamps(true, true);
            });

          case 2:
            _context.next = 4;
            return knex.raw("\n    CREATE OR REPLACE FUNCTION update_modified_column()\n    RETURNS TRIGGER AS $$\n    BEGIN\n      NEW.updated_at = now();\n      RETURN NEW;\n    END;\n    $$ language 'plpgsql';\n    CREATE TRIGGER update_".concat(tableName, "_updated_at\n    BEFORE UPDATE ON \"").concat(tableName, "\"\n    FOR EACH ROW\n    EXECUTE PROCEDURE update_modified_column();\n  "));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addTableTimestamps.apply(this, arguments);
}