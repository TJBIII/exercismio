"use strict";
//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  //see if input is just empty spaces
  if (input.trim() === ""){
    return 'Fine. Be that way!';
  }

  //see if all caps
  if (input.toUpperCase() === input && input.toLowerCase() !== input){
    return 'Whoa, chill out!';
  }

  //see if last character is a question mark
  if (input[input.length - 1] === '?'){
    return 'Sure.';
  }

  return "Whatever.";
};


module.exports = Bob;
