#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import {rps, rpsls} from './lib/rpsls.js';

var argv = minimist(process.argv.slice(2));
var HTTP_PORT = 0;

if(argv['port'] != undefined){
    HTTP_PORT = argv['port']
} else {
    HTTP_PORT = 5000;
}

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const server = app.listen(HTTP_PORT, () => {
    console.log(`Server is running on port ${HTTP_PORT}`)
});

app.get("/app/", (req,res,next) => {
    res.json({"message": "200 OK"});
    res.status(200);
});

app.get("/app/rps", (req,res,next) => {
    res.json(rps());
    res.status(200);
});

app.get("/app/rpsls", (req,res,next) => {
    res.json(rpsls());
    res.status(200);
});

app.get("/app/rps/play", (req,res,next) => {
    res.json(rps(req.query.shot));
    res.status(200);
});
