"use strict";

let PhoneNumber = function (str){
  this.numStr = str;
}

PhoneNumber.prototype.number = function () {
  let str = this.numStr;

  str = str.replace(/[^0-9]/g, "");
  if (str.length < 10){
    return '0000000000';
  } else if (str.length == 11 && str[0] !== '1'){
    return '0000000000';
  }

  return str.length === 11 ? str.slice(1) : str;
}

PhoneNumber.prototype.areaCode = function () {
  let str = this.numStr;

  let areacode = str.match(/([0-9]{3})/);

  return areacode[0];
}

PhoneNumber.prototype.toString = function () {
  let str = this.numStr;

  let regex = /(\d{3})(\d{3})(\d{4})/;

  let result = regex.exec(str);

  return `(${result[1]}) ${result[2]}-${result[3]}`; 

}

module.exports = PhoneNumber;