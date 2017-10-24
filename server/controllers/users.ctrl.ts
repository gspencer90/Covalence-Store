import * as express from "express";
import * as procedures from "../procedures/users.proc";

const router = express.Router();

router.get("/", (req, res) => {
  procedures
    .all()
    .then(users => {
      res.send(users);
    })
    .catch(e => {
      console.log(e);
      res.sendStatus(500);
    });
});

export default router;
