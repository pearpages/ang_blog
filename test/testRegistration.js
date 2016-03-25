'use strict';

function req(module) {
    return require("../persistent-models/"+module);
}

var Course = req('Course'),
Student = req('Student'),
Registration = req('Registration'),
DataLoader = require('../core/DataLoader'),
chai = require("chai"),
sinon = require('sinon');

chai.should();

describe("Registration", function () {
    var dataLoader,
    student,
    course,
    registration;

    it("doesn't call save if the course is full", function () {
        
    });    
});