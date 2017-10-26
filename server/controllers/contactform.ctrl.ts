import { Router } from 'express';
import { sendEmail } from '../services/email.svc';

const router = Router();

router.post('/', (req, res) => {
    sendEmail('stinson.lyon@gmail.com', req.body.from, 'You have a new contact form submission', req.body.message)
    .then((response) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

export default router;