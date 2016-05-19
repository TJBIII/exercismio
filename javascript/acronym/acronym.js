"use strict";

let Acronyms = function () {}

Acronyms.parse = function (str) {
  str = str.replace(/\-/g, " ");
  str = str.replace(/([a-z]{1})([A-Z]{1})/g, `$1 $2`);
  let arr = str.split(" ");

  let ans = "";

  arr.forEach( (word) => {
    ans += word[0].toUpperCase();
  });

  return ans;
}

module.exports = Acronyms;