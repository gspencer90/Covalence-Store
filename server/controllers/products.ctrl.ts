import * as express from 'express';
import * as products from '../procedures/products.proc';

let router = express.Router();

router.get('/', (req, res) => {
    all()
    .then((products) => {
        res.send(products);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

export default router;