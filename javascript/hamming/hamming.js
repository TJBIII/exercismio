"use strict";

let Hamming = function (){
}

Hamming.prototype.compute = function(s1, s2) {
  if (s1.length !== s2.length){
    throw new Error('DNA strands must be of equal length.')
  } else {
    s1 = s1.split();
    s2 = s2.split();
    return s1.map((na1, i) => na1 === s2[i] ? 0 : 1).reduce((prev, curr) => prev + curr);
  }
};

module.exports = Hamming;