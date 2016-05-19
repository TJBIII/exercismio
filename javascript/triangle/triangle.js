"use strict";

let Triangle = function (a,b,c) {
  this.s1 = a;
  this.s2 = b;
  this.s3 = c;
}


Triangle.prototype.kind = function () {
  let s1 = this.s1,
      s2 = this.s2,
      s3 = this.s3;

      if (s1 + s2 < s3 || s2 + s3 < s1 || s1 + s3 < s2){
        throw new Error('triangle inequality violated');
      } else if (s1 <= 0 || s2 <= 0 || s3 <= 0){
        throw new Error('cant have side length <= 0');
      }

      if (s1 === s2  && s2=== s3){
        return 'equilateral';
      } else if (s1 === s2 || s1 === s3 || s2 === s3){
        return 'isosceles'
      } else {
        return 'scalene';
      }
}


module.exports = Triangle;