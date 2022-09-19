"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
//localhost:3333/ads
app.get('/games', function (request, response) {
    return response.json([]);
});
app.post('/ads', function (request, response) {
    return response.json([]);
});
app.get('/ads', function (request, response) {
    return response.json([
        { id: 1, name: 'Anúnico 1' },
        { id: 2, name: 'Anúncio 2' },
        { id: 3, name: 'Anúncio 3' },
        { id: 4, name: 'Anúncio 4' },
        { id: 5, name: 'Anúncio 5' },
    ]);
});
app.listen(3333);
