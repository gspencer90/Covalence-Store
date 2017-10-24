import * as express from "express";
import * as passport from "passport";
import * as procedures from "../procedures/users.proc";
import * as auth from "../middleware/auth.mw";
import * as utils from "../utils";

const router = express.Router();

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err: any, user: models.IUser, info: any) => {
    console.log(user);
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    if (!user) {
      return res.status(401).send(info);
    }
    req.login(user, err => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        delete user.password;
        return res.send(user);
      }
    });
  })(req, res, next);
});

router.all("*", auth.isLoggedIn);
// instead of router.get, router.put, router.post, etc.

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(() => {
      req.logOut();
      res.sendStatus(204);
    });
  }
});

router.get('/', (req, res) => {
  procedures.all()
  .then((users) => {
    res.send(users);
  }).catch((e) => {
    console.log(e);
    res.sendStatus(500);
  });
});

router.post('/', (req, res) => {
  utils.encryptPassword(req.body.password)
  .then((hash) => {
    return procedures.newUser(req.body.firstname, req.body.lastname, req.body.email, hash);
  }).then((id) => {
    res.send(id);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
})

router.route("/").get((req, res) => {
  procedures
    .all()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get("/me", (req, res) => {
  res.send(req.user);
});

router.route("/:id").get((req, res) => {
  procedures
    .read(req.params.id)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

export default router;