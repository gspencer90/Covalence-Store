import * as express from 'express';
import * as procedures from '../procedures/products.proc';

let router = express.Router();

router.get('/', (req, res) => {
    procedures.all()
    .then((products) => {
        res.send(products);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

export default router;