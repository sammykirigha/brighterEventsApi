import { addTableTimestamps } from '../addTablestamps.js';

const EVENTS_TABLE = 'events';
const USERS_TABLE = 'users';

async function createEventsTable(knex) {
    await knex.schema.createTable(EVENTS_TABLE, table => {
        table.string('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('location').notNullable();
        table.date('date').notNullable();
        table.time('time').notNullable();
        table.string('created_by').references('id').inTable(USERS_TABLE).notNullable().onDelete('cascade');
    })
    await addTableTimestamps(knex, EVENTS_TABLE)
}

export async function up(knex) {
    await createEventsTable(knex)
}

export async function down(knex) {
    await knex.schema.dropTable(EVENTS_TABLE)
}
