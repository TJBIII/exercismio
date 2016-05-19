"use strict";

let Clock = function (h, m) {
  //handle minutes if undefined
  m = m || 0; 

  this.min = m % 60 + (m < 0 ? +60 : 0);
  this.hour = (h + Math.floor(m / 60)) % 24;
  this.hour += this.hour < 0 ? +24 : 0;
}

Clock.prototype.toString = function () {
  let h = this.hour < 10 ? '0' + this.hour.toString() : this.hour;
  let m = this.min < 10 ? '0' + this.min.toString() : this.min;

  return `${h}:${m}`;
}

Clock.at = function (h, m) {
  return new Clock(h, m);
}

Clock.prototype.equals = function (other) {
  return ( this.hour === other.hour &&
           this.min === other.min );
}

Clock.prototype.plus = function (m) {
  return new Clock(this.hour, this.min + m);
}

Clock.prototype.minus = function (m) {
  return new Clock(this.hour, this.min - m);
}

module.exports = Clock;