const MinHeap = require('./data-structures/heap');
const heap = new MinHeap();
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);
console.log(heap.getAsArray());