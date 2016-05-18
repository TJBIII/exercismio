"use strict";

let usedNames = { };

//random int on interval [min, max]
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nameGenerator = function () {
  let name = "";
  name += String.fromCharCode(65 + randomInt(0, 25));
  name += String.fromCharCode(65 + randomInt(0, 25));
  name += randomInt(0,9);
  name += randomInt(0,9);
  name += randomInt(0,9);

  if (usedNames[name]){
    name = nameGenerator();
  }

  usedNames[name] = true;
  
  return name;
}

let Robot = function () {
  this.name = nameGenerator();
}

Robot.prototype.reset = function () {
  this.name = nameGenerator();
}

module.exports = Robot;