"use strict";

let ETL = function () { }

ETL.prototype.transform = function (old) {
  let newobj = {};
  
  for (let key in old ){
    old[key].forEach( (letter) => {
      newobj[letter.toLowerCase()] = parseInt(key);
    });
  }

  return newobj
}

module.exports = ETL;