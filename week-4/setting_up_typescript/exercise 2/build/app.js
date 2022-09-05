"use strict";
class Student {
    constructor(n, a, g) {
        this.addGrade = function (num) {
            this.grades.push(num);
        };
        this.getGradeAvg = function () {
            let sum = 0;
            this.grades.forEach(g => sum += g);
            return sum / this.grades.length;
        };
        this.sName = n;
        this.age = a;
        this.grades = g;
    }
}
let yoram = new Student('Yoram', 24, []);
yoram.addGrade(90);
yoram.addGrade(80);
console.log(yoram.getGradeAvg());
