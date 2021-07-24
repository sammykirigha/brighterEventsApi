// Update with your config settings.
import path from 'path';

import { getConfig } from '../config/index.js';

const {
  env,
  db: { name, username, password, host }
} = getConfig();


const defaultOptions = {
  client: 'pg',
  connection: `postgresql://${username}:${password}@${host}/${name}`,
  migrations: {
    directory: path.join(path.dirname('.'), 'migrations')
  }
}

const configs = {
  development: defaultOptions,
  staging: defaultOptions,
  production: defaultOptions,
  local: defaultOptions,
  test: defaultOptions
}

if (configs[env] === undefined) {
  throw Error(`Missing configuration for environment: ${env}`)
}

export default configs;

