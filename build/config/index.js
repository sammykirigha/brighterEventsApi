"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfig = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var envVarsSchema = _joi.default.object({
  NODE_ENV: _joi.default.string().allow('development', 'production', 'text', 'staging').required().default('development'),
  PORT: _joi.default.number(),
  DATABASE: _joi.default.string().required(),
  DATABASE_DIALECT: _joi.default.string().default('postgres'),
  DATABASE_PASSWORD: _joi.default.string().default(null),
  DATABASE_USER: _joi.default.string().required(),
  DATABASE_URL: _joi.default.string().default(null),
  HOST: _joi.default.string().required(),
  SECRET_KEY: _joi.default.string().required(),
  JWT_EXPIRATION: _joi.default.string().required()
}).unknown().required();

var getConfig = function getConfig() {
  var _envVarsSchema$valida = envVarsSchema.validate(process.env),
      error = _envVarsSchema$valida.error,
      envVars = _envVarsSchema$valida.value;

  if (error) {
    throw new Error("Config validation error: ".concat(error.message));
  }

  var config = {
    env: envVars.NODE_ENV || 'development',
    port: envVars.PORT,
    db: {
      name: envVars.DATABASE,
      username: envVars.DATABASE_USER,
      password: envVars.DATABASE_PASSWORD,
      databaseUrl: envVars.DATABASE_URL,
      host: envVars.HOST
    },
    secretKey: envVars.SECRET_KEY,
    jwtExpiration: envVars.JWT_EXPIRATION
  };
  return config;
};

exports.getConfig = getConfig;