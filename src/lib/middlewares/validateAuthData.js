
import { validationResult, check } from 'express-validator';

class ValidateAuthData {
     registerValidator = () => {
        return [
            check('username')
                .notEmpty()
                .withMessage('username is required')
                .not()
                .custom((val) => /[^A-za-z0-9\s]/g.test(val))
                .withMessage('username should not use uniq characters'),
            check('email')
                .notEmpty()
                .withMessage('Email is required to register'),
            check('password')
                .notEmpty()
                .withMessage('password is required')
                .isLength({ min: 8 })
                .withMessage('password must be 8 characters'),
        ]
     }
    
     loginValidator = () => {
        return [
            check('email')
                .notEmpty()
                .withMessage('Email is required'),
            check('password')
                .notEmpty()
                .withMessage('password is required'),
        ]
    }
}

export const validateAuthData = new ValidateAuthData()
