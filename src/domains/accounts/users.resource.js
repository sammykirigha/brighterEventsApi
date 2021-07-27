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
        const user = await knexInstance(USERS_TABLE)
            .where(field, value)
            .first()
        return user;
    }
}

export const userResource = new UserResource();