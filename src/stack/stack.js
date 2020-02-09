"use strict";

class Stack {
  
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

}

module.exports = Stack;