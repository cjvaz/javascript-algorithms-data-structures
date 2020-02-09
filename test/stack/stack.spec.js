"use strict";

const chai = require('chai')
const expect = chai.expect
const Stack = require('../../src/stack/stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('starts empty', () => {
    expect(stack.size()).to.equal(0);
    expect(stack.isEmpty()).to.equal(true);
  });

  it('pushes elements', () => {
    stack.push(1);
    expect(stack.size()).to.equal(1);
    stack.push(2);
    expect(stack.size()).to.equal(2);
    stack.push(3);
    expect(stack.size()).to.equal(3);

    expect(stack.isEmpty()).to.equal(false);
  });
  
});
