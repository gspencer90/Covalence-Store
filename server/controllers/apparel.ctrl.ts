import { Router } from "express";
import * as procedures from "../procedures/apparel.proc";

let router = Router();

router.get("/", (req, res) => {
  procedures
    .all()
    .then((apparel) => {
      res.send(apparel);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

export default router;