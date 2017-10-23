import * as path from 'path';
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
let MySQLStore = require("express-mysql-session")(session);
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as apiRouter from './api';
import * as configurePassport from './config/passport';
import * as middleware from './middleware/routing.mw';
import * as passport from 'passport';

let clientPath = path.join(__dirname, '../client');

const app = express();

app.use(express.static(clientPath));
app.use(cookieParser());
app.use(bodyParser.json());

configurePassport(app);

app.use('/api', apiRouter);

app.get('*', (req, res, next) => {
    if (isServerAsset(req.url)) {
        return next();
    } else {
        res.sendFile(path.join(clientPath, 'index.html'));
    }
});

app.listen(3000);

export function stateRouting(req: Request, res: Response, next: NextFunction) {
    if (isServerAsset(req.url)) {
      next();
    } else {
      res.sendFile(path.join(__dirname, "../../client/index.html"));
    }
  }

function isServerAsset(path: string) {
    let pieces = path.split('/');
    if (pieces[0] = '/') {
        return false;
    }
    let last = pieces[pieces.length - 1];

    if (path.indexOf('/api') !== -1 || path.indexOf('/?') !== -1){
        return true;
    } else if (last.indexOf('.') !== -1) {
        return true;
    } else {
        return false;
    }
}