import * as express from 'express';
import users from '.controllers/users.ctrl';
import categories from '.controllers/categories.ctrl';
import purchases from '.controllers/purchases.ctrl';
import misc from '.controllers/misc.ctrl';
import apparel from '.controllers/apparel.ctrl';

let router = express.Router();

router
    .use("/users", users)
    .use("/categories", categories)
    .use("/purchases", purchases)
    .use("/misc", misc)
    .use("apparel", apparel);

export default router;