import customError from '../util/customError.js';

const errorHandler = (err, req, res, next) => {
    if (res.headerSent) {
        return next(err)
    }
    if (err instanceof customError) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    const message = err.message || err.detail || err;
    return res.status(500).json({message})
}

export default errorHandler;