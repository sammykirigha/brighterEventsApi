import express from 'express';
import morgan from 'morgan';
import errorHandler from './lib/middlewares/globalErrorHandle.js';



class App {
    createExpressApp() {
        const app = express();
        app.use(express.json)


        if (app.get('env') === 'development') {
            app.use(morgan('dev'))
        }
        
        //errorhandler should be added as the last middleware to the app
        app.use(errorHandler)

        return app;
    }

    start(config, logger) {
        const app = this.createExpressApp();

        app.listen(config.port, () => {
            logger.info(`app running on port ${config.port}`)
        })
    }

}

const app = new App()
export default app;