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

<<<<<<< HEAD
=======
// router.get("/category/:categoryid", (req, res) => {
//   procedures.getCategory()
//     .then(products => {
//       res.send(products);
//     })
//     .catch(err => {
//       console.log(err);
//       res.sendStatus(500);
//     });
// });

>>>>>>> 5c70aa79e57a4aa36fb0fd9e38668fca41846b3e
export default router;
