"use strict";


let Gigasecond = function (birthday) {
  this.birthday = birthday;
}

Gigasecond.prototype.date = function () {
  let gigamilli = Math.pow(10,9) * 1000;
  let anniversary = new Date();
  anniversary.setTime(this.birthday.getTime() + gigamilli); 
  return anniversary;
}

module.exports = Gigasecond;