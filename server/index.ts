import * as path from 'path';
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import apiRouter from './api';
import * as middleware from './middleware/routing.mw';
import stateRouting from './middleware/routing.mw';


let clientPath = path.join(__dirname, '../client');

const app = express();

app.use(express.static(clientPath));
app.use(bodyParser.json());

app.use((req, res, next) => {
    next();
});

app.use('/api', apiRouter);

app.get('*', stateRouting);

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening...")
});