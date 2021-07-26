import Schema from 'validate';

const authData = {
    email: {
        type: String,
        required: true,
        message: 'please provide a valid email'
    },
    password: {
        type: String,
        required: true,
        length: {min: 6, max: 12}
    }
}

const validateAuthData = (req, res, next) => {
    const userData = new Schema(authData);
    const errors = userData.validate(req.body);
    if (errors.length) {
        return res.status(400).json({message:errors[o].message})
    }
    next();
}

export default validateAuthData;