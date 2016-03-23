'use strict';

var rootPath = "../students/";

var fs = require("fs"), _p;

function DataLoader() {};

_p = DataLoader.prototype;

_p.getStudent = function(studentId, cb) {
    var filePath = rootPath+studentId+".json";

    fs.readFile(filePath, function(err,data) {
        if(err) {
            if (err.code && "ENOENT" === err.code) {
                throw new Error("Student "+studentId+" does not exist");
            }
            throw err;
        }

        cb(JSON.parse(data));
    });
};

_p.getStudentSync = function (studentId) {
    var filePath = rootPath+studentId+".json";

    return JSON.parse(fs.readFileSync(filePath));
};

_p.getCourseSync = function () {};

_p.saveCourseSync = function () {};

module.exports = DataLoader;