import * as express from 'express';
import users from './controllers/users.ctrl';
import products from './controllers/products.ctrl';
// import purchases from './controllers/purchases.ctrl';


let router = express.Router();

router
    .use("/users", users)
    // .use("/purchases", purchases)
    .use("/products", products);

export default router;