import * as express from 'express';
import products from './controllers/products.ctrl';
import purchases from './controllers/purchases.ctrl';
import misc from './controllers/misc.ctrl';

import apparel from './controllers/apparel.ctrl'

let router = express.Router();

router
  .use("/purchases", purchases)
  .use("/misc", misc)
  .use("/apparel", apparel)
  .use("/products", products);

export default router;
