"use strict";

let DnaTranscriber = function () { };

DnaTranscriber.prototype.toRna = (seq) => {
  let dna = ['G', 'C', 'T', 'A'];
  let rna = ['C', 'G', 'A', 'U'];

  seq = seq.split("");

  return seq.map((nuc) => rna[dna.indexOf(nuc)]).join("");
}

module.exports = DnaTranscriber;
