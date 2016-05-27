"use strict";

let Strain = { 
  keep: strainKeep,
  discard: strainDiscard
};

function strainKeep (arr, f) {
  if ( arr.length ) { 
    return arr.filter(f);
  }

  return new Array();
}


function strainDiscard (arr, f) {
  if (arr.length) {
    let filtered = arr.filter(f);
    let discard = [];

    for (let i in arr) {
      if (filtered.indexOf(arr[i]) === -1){
        discard.push(arr[i]);
      }
    }

    return discard;
  }

  return new Array();
}


module.exports = Strain;