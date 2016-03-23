'use strict';

var chai = require('chai'),
    should = chai.should(),
    DataLoader = require("../core/DataLoader"),
    dataLoader = new DataLoader();

describe('DataLoader', function() {
    it('gets a student synchronously', function() {
        var student = dataLoader.getStudentSync(1);
    });
});