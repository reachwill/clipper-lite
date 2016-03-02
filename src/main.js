//main entry point
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var app_1 = require('./app');
browser_1.bootstrap(app_1.App, [http_1.HTTP_PROVIDERS])
    .catch(function (err) { return console.error(err); });
