import * as express from 'express';
import { all } from '../procedures/apparel.proc';

let router = express.Router();

router.get('/', (req, res) => {
    all()
    .then((apparel) => {
        res.send(apparel);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

export default router;