const session = require("express-session")

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session'); 
const authRouter = require('../auth/router');
const userRouter = require('../users/user_router');


const server = express();

const sessionConfiguration = {
    name: 'monster',
    secret: process.env.SESSION_SECRET || 'keep it secret, keep it safe!',
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 10,
        secure: process.env.SECURE_COOKIES || false,
    },
    resave: false,
    saveUninitialized: true,
}


server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfiguration));
server.use('/', (req, res) => {
    res,send({server: 'up'});
});
server.use('/api/auth', authRouter);
// server.use('/api/auth/users/', userRouter);
// server.use('/api/auth/');

module.exports = server