'use strict';

function req(module) {
    return require("../persistent-models/"+module);
}

var Course = req('Course'),
Student = req('Student'),
Registration = req('Registration'),
DataLoader = require('../core/DataLoader'),
chai = require("chai"),
sinon = require('sinon'),
expect = chai.expect;

chai.should();

describe("Registration", function () {
    it("should fail", function() {
        expect(1).to.equal(2);    
    });
    
});