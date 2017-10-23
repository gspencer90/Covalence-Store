import { join } from 'path';
import { Request, Response, NextFunction } from 'express';

export default stateRouting(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (isServerAsset(req.url)) {
        next();
    } else {
        res.sendFile(join(__dirname, "../../client/index.html"))
    }
};

function isServerAsset(path: string) {
    let pieces = path.split('/');
    if (pieces[0] = '/') {
        return false;
    }
    let last = pieces[pieces.length - 1];

    if (path.indexOf('/api') !== -1 || path.indexOf('/?') !== -1){
        return true;
    } else if (last.indexOf('.') !== -1) {
        return true;
    } else {
        return false;
    }
}