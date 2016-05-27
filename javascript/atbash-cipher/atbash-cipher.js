"use strict";

let alpha = 'abcdefghijklmnopqrstuvwxyz';
let reverse = alpha.split("").reverse().join("");

let atbash = {
  encode: encode
};

function encode (s) {
  s = s.toLowerCase();
  s = s.replace(/[,.\s]/g, "");

  let encoded = "";
  s.split("").forEach( (letter) => {
    if (alpha.indexOf(letter) === -1){
      encoded += letter;
    } else {
      encoded += reverse[alpha.indexOf(letter)];
    }
  });

  encoded = encoded.replace(/(.{5})/g,"$1 ").trim();

  return encoded;
}

module.exports = atbash;