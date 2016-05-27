"use strict";

var Allergies = function(score) {
  this.score = score;
  this.allergieNames = [ 'eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats' ];
}

Allergies.prototype.list = function() {
  return this.allergieNames.filter( this.allergicTo, this );
};

Allergies.prototype.allergicTo = function(item, index) {
  return Boolean(this.score & (1 << index));
};

module.exports = Allergies;