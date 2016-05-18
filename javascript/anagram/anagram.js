"use strict";

let Anagram = function (word) {
  this.startWord = word;
}

Anagram.prototype.matches = function (words) {
  //if arguments are strings, put them into an array
  if (typeof words === 'string'){
    words = Array.prototype.slice.call(arguments);
  }

  let startWordArr = this.startWord.toLowerCase().split('').sort(),
      ans = [],
      isAnagram,
      wordArr;

  words.forEach( (word) => {
    isAnagram = true;

    if (word.toLowerCase() == this.startWord.toLowerCase()){
      isAnagram = false;
    }

    wordArr = word.toLowerCase().split('').sort();

    if (startWordArr.length === wordArr.length){
      for (let i = 0; i < startWordArr.length; i++){
        if (startWordArr[i] !== wordArr[i]){
          isAnagram = false;
          break;
        }
      }
      
      if (isAnagram) {
        ans.push(word);
      }
    }
  });

  return ans;
}

module.exports = Anagram;