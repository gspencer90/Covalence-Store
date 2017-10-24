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