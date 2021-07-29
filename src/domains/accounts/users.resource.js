import { knexInstance } from '../../database/knexInstance.js';

const USERS_TABLE = 'users';

class UserResource {
    async create(createUserBody) {
        const created = await knexInstance(USERS_TABLE).insert(
            createUserBody,
            '*',
        );
        return created[0]
    }

    async getUser(field, value) {
        const query = knexInstance(USERS_TABLE)
            .where(field, value)
            .first()
        console.log(query.toString())
        const user = await query
        return user;
    }

    async getUsers() {
        const users = await knexInstance(USERS_TABLE).select('*')
        return users;

    }
}

export const userResource = new UserResource();