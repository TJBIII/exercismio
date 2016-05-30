"use strict";

let Trinary = function (str) {
  this.numStr = str;
}

Trinary.prototype.toDecimal = function () {

  if (isNaN(parseInt(this.numStr))){
    //numStr has a non-numeric character
    return 0;
  }

  let numStr = this.numStr,
      l = numStr.length,
      decimal = 0;

  for (var i = l - 1; i >= 0; i--) {
    // will take on the values 0, 3, 9, 27,...
    let positionVal =  Math.pow(3, ((l-1) - i));

    decimal += (positionVal * parseInt(numStr[i]));
    
  }

  return decimal;
}

module.exports = Trinary;