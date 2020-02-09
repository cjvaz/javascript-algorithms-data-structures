"use strict";

class StackArray {
  
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  clear() {
    this.items = [];
  }

  toArray() {
    return this.items;
  }
}

module.exports = StackArray;