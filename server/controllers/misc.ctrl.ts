import * as passport from 'passport';
import * as express from 'express';
import * as procedures from '../procedures/misc.proc';
import * as auth from '../middleware/auth.mw';

let router = express.Router();

router.route('/')
    .get((req,res)=>{
        procedures.all()
        .then((misc)=>{
            res.send(misc);
        }).catch((err)=>{
            console.log(err);
            res.sendStatus(500);
        })
    })
    