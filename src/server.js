import logger from 'fancy-log';
import app from './app.js';
import { getConfig } from './config/index.js';

app.start(getConfig(), logger);