import { Router } from "express";
import * as procedures from "../procedures/products.proc";

let router = Router();

router.get("/", (req, res) => {
  procedures
    .all()
    .then(products => {
      res.send(products);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.route('/:id')
.get((req, res) => {
    procedures.read(req.params.id)
    .then((product) => {
        res.send(product)
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
})

router.get("/category/:categoryid", (req, res) => {
  procedures.getCategory(req.params.categoryid)
    .then(products => {
      res.send(products);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

export default router;
