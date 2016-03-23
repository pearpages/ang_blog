'use strict';

var Student = require("../non-persistent-models/Student")
, Course = require("../non-persistent-models/Course")
, chai = require("chai")
, should = chai.should()
, expect = chai.expect
;

describe("Student", function() {

    var studentName = "John Doe",
        studentGrade = 5;

    it('should save the info on the student and create an id when crated', function() {
        var student = Student.create(studentName, studentGrade);

        should.exist(student.name);
        student.name.should.equal(studentName);

        should.exist(student.grade);
        student.grade.should.equal(studentGrade);

        should.exist(student.id);
    });

    it("should increase the student's grade by 1 when advanceGrade is called", function() {
        // arrange
        var student = Student.create(studentName, studentGrade);

        // act
        student.advanceGrade();

        // assert
        student.grade.should.equal(studentGrade+1);
    });
});