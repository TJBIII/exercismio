"use strict";
let BigInt = require('./big-integer');

let Grains = function () { }

Grains.prototype.square = function (squareIdx) {

  let BigI = new BigInt(2);

  return BigI.pow(squareIdx - 1).toString();
}

Grains.prototype.total = function () {
  let ans = new BigInt(0);

  for (let i = 0; i < 64; i++){
    let curr = new BigInt(2);
    curr = curr.pow(i);

    ans = ans.add(curr);
  }

  return ans.toString();
}

module.exports = Grains;