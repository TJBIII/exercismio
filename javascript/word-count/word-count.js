"use strict";

let Words = function () {
  
}

Words.prototype.count = function (phrase) {
  phrase = phrase.toLowerCase();
  phrase = phrase.trim();

  let arr = phrase.split(/[\n\s]/),
      uniqueWords = new Set(arr),
      counts = {},
      ct = 0;

  uniqueWords.forEach( (currWord) => {
    currWord = currWord.trim();
    ct = 0;

    arr.forEach((word) => {
      word = word.trim();
      if (word === currWord){
        ct += 1;
      }
    });

    if (currWord.trim() != ''){
      counts[currWord] = ct;
    }

  });

  return counts;
}

module.exports = Words;