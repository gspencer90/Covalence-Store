import * as path from 'path';
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import apiRouter from './api';
import configurePassport from './config/passport';
import * as middleware from './middleware/routing.mw';
import * as passport from 'passport';
import stateRouting from './middleware/routing.mw';


let clientPath = path.join(__dirname, '../client');

const app = express();

app.use(express.static(clientPath));
app.use(cookieParser());
app.use(bodyParser.json());

configurePassport(app);

app.use((req, res, next) => {
    next();
});

app.use('/api', apiRouter);

app.get('*', stateRouting);

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening...")
});