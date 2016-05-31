"use strict";

let Sieve = function (n) {

  let possibles = [],
      upperLimit = Math.sqrt(n),
      primes = [];

  // array of possibles from 2 to n where each value is true
  for (let i = 0; i <= n; i++) {
      possibles.push(true);
  }

  // cross off multiples of primes starting from 2, 3, 5,...
  for (let i = 2; i <= upperLimit; i++) {
      if (possibles[i]) {
          for (let j = i * i; j <= n; j += i) {
              possibles[j] = false;
          }
      }
  }

  // any possibles[i] still set to true is a prime
  for (let i = 2; i <= n; i++) {
      if(possibles[i]) {
          primes.push(i);
      }
  }

  this.primes =  primes;
}

module.exports = Sieve;