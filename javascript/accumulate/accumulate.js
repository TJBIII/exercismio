"use strict";

let accumulate = function ( arr, accumulator ) {
  if (arr.length) {
    return arr.map( (item) => accumulator(item) );
  } else {
    return new Array();
  }
}

module.exports = accumulate;