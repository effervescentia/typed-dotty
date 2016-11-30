"use strict";
var test = require("blue-tape");
var dotty = require("dotty");
test('dotty exists', function (t) {
    t.plan(1);
    t.notEqual(dotty, undefined);
});
