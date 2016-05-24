"use strict";

let Binary = function (str){
  this.binStr = str;
}

Binary.prototype.toDecimal = function () {
  let len = this.binStr.length,
  currExponent = len - 1,
      ans = 0;

  for (let i = 0; i < len; i++){
    if (this.binStr[i] !== '1' && this.binStr[i] !== '0'){
      return 0;
    }
    ans += parseInt(this.binStr[i]) * Math.pow(2, currExponent);
    currExponent -= 1;
  }

  return ans;
}

module.exports = Binary;