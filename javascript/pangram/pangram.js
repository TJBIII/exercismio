"use strict";

let Pangram = function (str) {
  this.str = str;
}

Pangram.prototype.isPangram = function () {
  let str = this.str.toLowerCase().trim();
  str = str.replace(/[^a-zA-Z]+/g, "");

  let strSet = new Set(str);

  return strSet.size === 26;
}

module.exports = Pangram;