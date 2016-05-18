"use strict";

let Isogram = function (word){
  this.word = word;
}

Isogram.prototype.isIsogram = function() {
  let word = this.word.toLowerCase();
  word = word.replace(/[\s\-]/g, "");

  let letters = word.split("");
  let letterSet = new Set(letters);
  let uniqueLetters = Array.from(letterSet);

  return letters.length === uniqueLetters.length;
};

module.exports = Isogram;