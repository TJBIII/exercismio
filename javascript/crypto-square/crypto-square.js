"use strict";

let Crypto = function (text) {
  this.text = text;
}

Crypto.prototype.normalizePlaintext = function () {
  //make all lower case and only keep alphanumeric characters
  this.text = this.text.toLowerCase();
  return this.text.replace(/[^A-Za-z0-9]/g, "");
}

Crypto.prototype.size = function () {
  this.normalized = this.normalizePlaintext(this.text);
  let rows = Math.ceil(Math.sqrt(this.normalized.length));
  return rows;
}

Crypto.prototype.plaintextSegments = function () {
  let s = this.size();
  let normalized = this.normalizePlaintext(this.text),
      segments = [],
      str;

  for (let i = 0; i < normalized.length; i += s){
    let str = "";
    for (let j = 0; j < s; j++){
      if ( i + j < normalized.length) {
        str += normalized[i + j];
      }
    }
    segments.push(str);
  }

  return segments;
}

Crypto.prototype.ciphertext = function () {
  let segments = this.plaintextSegments(),
      ciphered = "";

  for (let colIdx = 0; colIdx < segments[0].length; colIdx++){
    segments.forEach( (seg) => {
      if (seg[colIdx]){
        ciphered += seg[colIdx];
      }
    });
  }

  return ciphered;
}

module.exports = Crypto;