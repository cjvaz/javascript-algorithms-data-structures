import { defaultEquals } from '../util';
import { Node } from './models/linked-list-models';

class LinkedList {
  
  constructor(equalsFn = defaultEquals) {
    this.equalsFn = equalsFn;
    this.count = 0;
    this.head = undefined;
  }
  
}

module.exports = LinkedList;
