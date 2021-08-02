import knexCleaner from 'knex-cleaner';
import { getConfig } from '../config/index.js';
import { knexInstance } from '../database/knexInstance.js';
import configs from '../database/knexfile.js';

const envConfig = getConfig();

if (envConfig.env !== 'test' || envConfig.db.name !== 'events-test') {
    throw new Error('Not in test environment')
}

const config = configs[envConfig.env];

const knexCleanerOptions = {
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
}

export function describeDbTestSuite(name, func) {
    describe(name, () => {
        beforeAll(async () => {
            await knexInstance.migrate.rollback(config.migrations, true);
            await knexInstance.migrate.latest(config.migrations)
        });

        beforeEach(async () => {
            await knexCleaner.clean(knexInstance, knexCleanerOptions)
        });

        afterEach(async () => {
            await knexCleaner.clean(knexInstance, knexCleanerOptions)
        });

        afterAll(async () => {
            await knexInstance.migrate.rollback(config.migrations, true)
        });

        func(knexInstance)
    });

    
}