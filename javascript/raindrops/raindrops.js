"use strict";

let primefactors = require('../prime-factors/prime-factors.js');

let Raindrops = function () { };

Raindrops.prototype.convert = function (n) {

  if (n == 1) {
    return '1';
  }

  let primeFactorsList = primefactors.for(n);

  let result = "";

  primeFactorsList.forEach( (num) => {
    if (num === 3 && result.indexOf('Pling') < 0){
      result += 'Pling';
    }

    if (num === 5 && result.indexOf('Plang') < 0){
      result += 'Plang';
    }

    if (num === 7 && result.indexOf('Plong') < 0){
      result += 'Plong';
    }
  });

  return result.length > 0 ? result : n.toString() ;
}

module.exports = Raindrops;