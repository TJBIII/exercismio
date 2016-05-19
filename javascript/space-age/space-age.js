"use strict";

let SpaceAge = function (sec) {
  this.seconds = parseInt(sec);
}

SpaceAge.prototype.onMercury = function () {
  return parseFloat((this.seconds / (31557600 * 0.2408467)).toFixed(2));
}

SpaceAge.prototype.onVenus = function () {
  return parseFloat((this.seconds / (31557600 * 0.61519726)).toFixed(2));
}

SpaceAge.prototype.onEarth = function () {
 return parseFloat((this.seconds / 31557600).toFixed(2))
}

SpaceAge.prototype.onMars = function () {
  return parseFloat((this.seconds / (31557600 * 1.8808158)).toFixed(2));
}

SpaceAge.prototype.onJupiter = function () {
  return parseFloat((this.seconds / (31557600 * 11.862615)).toFixed(2));
}

SpaceAge.prototype.onSaturn = function () {
  return parseFloat((this.seconds / (31557600 * 29.447498)).toFixed(2));
}

SpaceAge.prototype.onUranus = function () {
  return parseFloat((this.seconds / (31557600 * 84.016846)).toFixed(2));
}

SpaceAge.prototype.onNeptune = function () {
  return parseFloat((this.seconds / (31557600 * 164.79132)).toFixed(2));
}




module.exports = SpaceAge;


1.8808158