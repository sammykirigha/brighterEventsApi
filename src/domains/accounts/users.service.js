import EncryptedData from '../../lib/helpers/encrypt.js';
import createToken from '../../lib/helpers/jwtHelpers.js';
import CustomError from '../../lib/util/customError.js';
import { getConfig } from '../../config/index.js';

import { userResource } from './users.resource.js';

const config = getConfig();

class UserService {
    async create(createUserBody) {
        const { email, password } = createUserBody;
        const existingUser = await userResource.getUser('email', email);
        if (existingUser) {
            throw new CustomError(401, 'User already exists');
        }
        const encryptedPassword = EncryptedData.generateHash(password);
        const createdUser = await userResource.create({
            email,
            password: encryptedPassword,
        });

        const token = createToken({ id: createdUser.id }, config.secretKey);

        const registeredUser = {
            ...createdUser,
            token,
        };
        return registeredUser;
    }

    login(user) {
        const { id } = user;
        const token = createToken({ id }, config.secretKey);
        return token;
    }
}

export const userService = new UserService();