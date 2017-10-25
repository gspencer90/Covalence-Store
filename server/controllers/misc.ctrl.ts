import { Router } from 'express';
import * as procedures from '../procedures/misc.proc';

let router = Router();

router.get("/", (req, res) => {
    procedures.getMisc()
      .then((misc) => {
        res.send(misc);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  });

router.route('/:id')
  .get((req, res) => {
    procedures.read(req.params.id)
      .then((misc) => {
          res.send(misc)
      }).catch((err) => {
          console.log(err);
          res.sendStatus(500);
      });
  })

export default router;

  