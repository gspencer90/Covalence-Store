import * as express from 'express';
import products from './controllers/products.ctrl';
import purchases from './controllers/purchases.ctrl';
import misc from './controllers/misc.ctrl';


let router = express.Router();

router
  .use("/purchases", purchases)
  .use("/products", products)
  .use("/misc", misc);

export default router;
