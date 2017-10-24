<<<<<<< HEAD
import { Router } from 'express';
import * as stripeSvc from '../services/stripe.svc';

const router = Router();

router.post('/', (req, res) => {
    let amount = Number(req.body.amount);
    stripeSvc.charge(req.body.token, amount)
    .then((success) => {
        res.sendStatus(204);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500).send(err.message);
    })
});
=======
import * as express from 'express';
import * as procedures from '../procedures/purchases.proc'

let router = express.Router();

router.route('/')
    .post((req,res)=>{
        procedures.newPurchase(req.body.price, req.body.transid)
        .then((id)=>{
            res.status(201).send(id);
        }).catch((err)=>{
            console.log(err);
            res.sendStatus(500);
        });
    });

router.route('/:id')
    .get((req,res)=>{
        procedures.read(req.params.id)
        .then((purchase)=>{
            res.send(purchase);
        }).catch((err)=>{
            console.log(err);
            res.sendStatus(500);
        });
    })
    .put((req,res)=>{
        procedures.update(req.params.id, req.body.price, req.body.transid)
        .then(()=>{
            res.sendStatus(204);
        }).catch((err)=>{
            console.log(err);
            res.sendStatus(500);
        });
    })
    .delete((req,res)=>{
        procedures.destroy(req.params.id)
        .then(()=>{
            res.sendStatus(204);
        }).catch((err)=>{
            console.log(err);
            res.sendStatus(500);
        });
    });

export default router;
>>>>>>> 95e40a882765066973d4ba77899072753172a53a
