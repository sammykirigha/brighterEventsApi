import  {addTableTimestamps} from '../addTablestamps';

const USERS_TABLE = 'users';

async function createUuidExtension(knex) {
    await knex.raw('create extension if not exists "uuid-ossp');
}

async function createUsersTable(knex) {
    await knex.schema.createTable(USERS_TABLE, table => {
        table.string('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('username').notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
    });
    await addTableTimestamps(knex, USERS_TABLE)
}

export async function up(knex) {
    await createUuidExtension(knex);

    await createUsersTable(knex)
}

export async function down(knex) {
    await knex.schema.dropTable(USERS_TABLE)
}

