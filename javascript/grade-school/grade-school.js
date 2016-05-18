"use strict";

let School = function () {
  this.school = {};
}

School.prototype.roster = function () {
  return this.school;
}

School.prototype.add = function (name, gradeInt) {
  let grade = this.school[gradeInt];

  if (grade) {
    let newGrade = grade;
    newGrade.push(name);
    
    this.school[gradeInt] = newGrade.sort();

  } else {
    this.school[gradeInt] = [name];
  }
}

School.prototype.grade = function (gradeInt) {
  if (this.school[gradeInt]){
    return this.school[gradeInt].sort();
  }

  return [];
}

module.exports = School;