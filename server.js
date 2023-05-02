#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import {rps, rpsls} from './lib/rpsls.js';

var argv = minimist(process.argv.slice(2));
var HTTP_PORT = 0;
const port = args.port || 5000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen(port);

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

app.get("/app/rpsls/play", (req,res,next) => {
    res.json(rpsls(req.query.shot));
    res.status(200);
});

app.post("/app/rps/play", (req,res,next) => {
    res.json(rps(req.body.shot));
    res.status(200);
});

app.post("/app/rpsls/play", (req,res,next) => {
    res.json(rpsls(req.body.shot));
    res.status(200);
});

app.get("/app/rps/play/:shot", (req,res,next) => {
    res.json(rps(req.params['shot']));
    res.status(200);
});

app.get("/app/rpsls/play/:shot", (req,res,next) => {
    res.json(rpsls(req.params.shot));
    res.status(200);
});

app.use(function(req,res){
    res.json({"message": "404 NOT FOUND"});
    res.status(404);
});
