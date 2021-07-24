import knex from 'knex';
import knexStringCase from 'knex-stringcase';

import { getConfig } from '../config/index.js';
import configs from './knexfile';

const config = configs[getConfig().env]

if (!config) {
    throw new Error('Missing database config')
}

export const knexInstance = knex(knexStringCase(config))
