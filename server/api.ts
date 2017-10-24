import * as express from "express";
import products from './controllers/products.ctrl';
import purchases from './controllers/purchases.ctrl';

let router = express.Router();

router
  .use("/purchases", purchases)
  .use("/products", products);

export default router;
