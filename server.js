/**
 * Created by romain.lenzotti on 30/05/2014.
 */
'use strict';

var express = require('express'),
    http = require('http'),
    path = require('path'),
    morgan = require('morgan'),
    expressJwt = require('express-jwt'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cookieParser = require('cookie-parser');

var app = module.exports = express();
app.use(morgan('dev'));                             // log every request to the console
app.use(cookieParser());                            // read cookies (needed for auth)
app.use(bodyParser.json());                         // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));    // to support URL-encoded bodies

app.use('/admin', expressJwt({
    secret: 'secretkeypmoangular',
    maxAge: new Date(Date.now() + 3600000),
    resave: true,
    saveUninitialized: true
}));
//
// install
//
require('./lib/db').initialize({
    server: app,
    settings: require('./conf/db.js')
});
