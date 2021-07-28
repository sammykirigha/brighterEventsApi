import { Router } from 'express';
import { protectedAsyncRequestHandler } from '../../lib/util/protectedAsyncHandler.js';
import {validateAuthData} from '../../lib/middlewares/validateAuthData.js';
import { userService } from './users.service.js';
import { localAuthentication }  from '../../lib/util/passportSetup.js';

export function getUsersRouter() {
    const usersRouter = Router();

    usersRouter.post(
        '/signup',
        validateAuthData.registerValidator(),
        protectedAsyncRequestHandler(async (req, res) => {

            const user = await userService.create(req.body);
            res.status(201).json({ message: 'Account created', token: user.token })
        }),
    );

    usersRouter.post(
        '/login',
           validateAuthData.loginValidator(),
        localAuthentication,
        (req, res) => {
            const token = userService.login(req.user);
            res.status(200).json({ message: 'Logged In successfully', token })
        },
    );

    usersRouter.get(
        '/users',
        protectedAsyncRequestHandler(async(req, res) => {
            const getUsers = await userService.getMyUsers()
            res.status(200).json({message: 'successful', users: getUsers})
        })
    )

    return usersRouter;
}