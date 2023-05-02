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
