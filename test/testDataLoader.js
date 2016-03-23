'use strict';

var chai = require('chai'),
    should = chai.should(),
    DataLoader = require("../core/DataLoader"),
    dataLoader = new DataLoader();

describe('DataLoader', function() {
    it('gets a student synchronously', function() {
        var student = dataLoader.getStudentSync(1);

        should.exist(student.name);
        student.name.should.equal("Pere Pages");

    });

    it('gets a student asynchronously', function(done) {
        dataLoader.getStudent(1,function(student) {
            should.exist(student.name);
            student.name.should.equal("Pere Pages");
            // the done function holds the test till the call is finished
            done();    
        });
        
    });
});