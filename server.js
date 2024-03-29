#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import {rps, rpsls} from './lib/rpsls.js';

var argv = minimist(process.argv.slice(2));
var HTTP_PORT = 0;
const port = argv.port || 5000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen(port);

app.get("/app/", (req,res) => {
    res.json({"message": "200 OK"});
    res.status(200);
});

app.get("/app/rps", (req,res) => {
    res.send(rps());
    res.status(200);
});

app.get("/app/rpsls", (req,res) => {
    res.send(rpsls());
    res.status(200);
});

app.get("/app/rps/play", (req,res) => {
    res.send(rps(req.query.shot));
    res.status(200);
});

app.get("/app/rpsls/play", (req,res) => {
    res.send(rpsls(req.query.shot));
    res.status(200);
});

app.post("/app/rps/play", (req,res) => {
    res.send(rps(req.body.shot));
    res.status(200);
});

app.post("/app/rpsls/play", (req,res) => {
    res.send(rpsls(req.body.shot));
    res.status(200);
});

app.get("/app/rps/play/:shot", (req,res) => {
    res.send(rps(req.params['shot']));
    res.status(200);
});

app.get("/app/rpsls/play/:shot", (req,res) => {
    res.send(rpsls(req.params.shot));
    res.status(200);
});

app.use(function(req,res){
    res.send({"message": "404 NOT FOUND"});
    res.status(404);
});
