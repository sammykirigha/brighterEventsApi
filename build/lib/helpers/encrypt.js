"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var EncryptedData = /*#__PURE__*/function () {
  function EncryptedData() {
    (0, _classCallCheck2.default)(this, EncryptedData);
  }

  (0, _createClass2.default)(EncryptedData, null, [{
    key: "generateHash",
    value: function generateHash(password) {
      return _bcrypt.default.hashSync(password, _bcrypt.default.genSaltSync(10), null);
    }
  }, {
    key: "compareHash",
    value: function compareHash(inputPassword, hashedPassword) {
      return _bcrypt.default.compare(inputPassword, hashedPassword);
    }
  }]);
  return EncryptedData;
}();

var _default = EncryptedData;
exports.default = _default;