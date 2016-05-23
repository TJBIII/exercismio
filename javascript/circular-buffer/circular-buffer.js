"use strict";

let circularBuffer = function (size) {
  let buffer = [];
  
  return {
    clear: function() { buffer = [] },

    read: function() {
      if(buffer.length <= 0)
        throw new bufferEmptyException();
      return buffer.shift();
    },
    
    write: function(data) {
      if(buffer.length >= size)
        throw new bufferFullException();
      if(data)
        buffer.push(data);
    },
    
    forceWrite: function(data) {
      //Writes data to the buffer (will overwrite)
      if(buffer.length >= size)
        buffer.shift();
      buffer.push(data);
    }
  };
};

let bufferEmptyException = function() {
  return { 
      name:  "Buffer Empty", 
      message:  "Buffer is empty.", 
    }; 
};

let bufferFullException = function() {
  return { 
      name:  "Buffer Full", 
      message: "Buffer is full.", 
    };
};

module.exports = {
  circularBuffer: circularBuffer,
  bufferEmptyException: bufferEmptyException,
  bufferFullException: bufferFullException,
};