import * as express from "express";
import * as passport from "passport";
import * as session from "express-session";
let MySQLStore = require("express-mysql-session")(session);
import { Strategy as LocalStrategy } from "passport-local";
import * as userProc from "../procedures/users.proc";
import { pool } from "./db";
import * as utils from '../utils';

export default function configurePassport(app: express.Express) {
    passport.use(
        new LocalStrategy(
            {
                usernameField: "email",
                passwordField: "password"
            }, (email, password, done) => {
                userProc.readByEmail(email).then(
                    user => {
                        if(!user) {
                            return done(null, false, { message: "Invalid login"})
                        }
                        if(user.password !== password) {
                            return done(null, false, { message: "Invalid login"})
                        }
                        return done(null, user);
                    },
                    err => {
                        return done(err);
                    }
                )
            }
        )
    )
}