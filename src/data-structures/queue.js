class Queue {

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(ele) {
    this.items[this.count] = ele;
    this.count++;
  }

  dequeue() {
    if(this.isEmpty()) {
      return undefined;
    }
    const ele = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return ele;
  }

  peek() {
    if(this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};    
  }
}

module.exports = Queue;