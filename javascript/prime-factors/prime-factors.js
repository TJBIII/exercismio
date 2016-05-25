"use strict";

let PrimeFactors = { 
  for: Factors
};

function isPrime (n) {
  if (n === 2) {
    return true;
  }

  let stop = Math.ceil(Math.sqrt(n));

  for (let i = 2; i < stop; i++) {
    if (n % i === 0){
      return false;
    } 
  }

  return true;
}

function Factors (n) {
  let factors = [];

  for (let i = 2; i <= n; i++ ) {
    if (isPrime(i) && n % i === 0) {
      factors.push(i);
      n /= i;
      i = 1;
    }
  }

  return factors;
}

module.exports = PrimeFactors;