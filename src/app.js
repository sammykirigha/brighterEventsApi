import express from 'express';
import morgan from 'morgan';


class App {
    createExpressApp() {
        const app = express();
        app.use(express.json)


        if (app.get('env') === 'development') {
            app.use(morgan('dev'))
        }

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