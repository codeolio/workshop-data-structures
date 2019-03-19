/*********************************************************/
/*                     DO NOT EDIT                       */
/*********************************************************/
const expect = require('chai').expect;
const Stack = require('../src/1_stack.js')

describe('Stack Data Structure', () => {
  let stack = null;
  describe('Stack: Constructor', () => {
    before(() => {
      stack = new Stack;
    });

    it('Should have a contents property that is an object', () => {
      expect(stack.contents).to.be.a('object');
    });
  
    it('Should have a length property initialized at 0', () => {
      expect(stack.length).to.be.a('number');
      expect(stack.length).to.equal(0);
    });
  });

  describe('Stack: Pushing to Stack', () => {
    beforeEach(() => {
      stack = new Stack();
    });

    it('Should have a push method on the constructors prototype', () => {
      expect(stack.__proto__).to.have.property('push').to.be.a('function');
    });

    it('Challenge 1: Push method should add a single value to the end of stack:', () => {
      stack.push('A');
      expect(stack.contents['0']).to.equal('A');
      stack.push('B'); 
      expect(stack.contents['1']).to.equal('B');
      stack.push('C');
      expect(stack.contents['2']).to.equal('C');
      expect(stack.length).to.equal(3);
    });

    it('Challenge 1: Push method should add multiple values to the end of the stack:', () => {
      stack.push('A', 'B', 'C', 'D');
      expect(stack.contents['0']).to.equal('A');
      expect(stack.contents['1']).to.equal('B');
      expect(stack.contents['2']).to.equal('C');
      expect(stack.contents['3']).to.equal('D');
      expect(stack.length).to.equal(4);
    });
  });

  describe('Stack: Popping from Stack', () => {
    beforeEach(() => {
      stack = new Stack();
    });

    it('Should have a pop method on the constructors prototype', () => {
      expect(stack.__proto__).to.have.property('push').to.be.a('function');
    });

    it('Challenge 2: Should return the last value pushed to the stack WITHOUT going negative', () => {
      stack.push('A');
      stack.push('B');
      stack.push('C');
      stack.push('D');
      expect(stack.pop()).to.equal('D');
      expect(stack.pop()).to.equal('C');
      expect(stack.pop()).to.equal('B');
      expect(stack.pop()).to.equal('A');
      expect(stack.pop()).to.be.undefined;
      expect(stack.length).to.equal(0);
    });
  });

  // EXTENSION TESTS - Remove 'x' before describe to activate
  xdescribe('Stack: Extension Methods', () => {
    beforeEach(() => {
      stack = new Stack();
    });

    it('Count Method: Should have a count method on the cunstructors prototype', () => {
      expect(stack.__proto__).to.have.property('count').to.be.a('function');
    });
    it('Challenge 3 - Count Method: Count method should return total values in stack', () => {
      stack.push('A');
      expect(stack.count()).to.equal(1);
      stack.push('B');
      expect(stack.count()).to.equal(2);
      stack.push('C', 'D', 'E');
      expect(stack.count()).to.equal(5);
    });

    it('Clear Method: Should have a clear method on the cunstructors prototype', () => {
      expect(stack.__proto__).to.have.property('clear').to.be.a('function');
    });
    it('Challenge 4 - Clear Method: Clear method should empty stack but not delete stack. Does not return any value', () => {
      stack.push('A');
      stack.push('B');
      stack.push('C');
      expect(stack.length).to.equal(0);
      exepct(stack.clear()).to.be.undefined;
      expect(stack.length).to.equal(0);
      expect(stack.contents['0']).to.be.undefined;
      expect(stack.contents['1']).to.be.undefined;
      expect(stack.contents['2']).to.be.undefined;
    });

    it('isEmpty Method: Should have a isEmpty method on the cunstructors prototype', () => {
      expect(stack.__proto__).to.have.property('isEmpty').to.be.a('function');
    });
    it('Challenge 5 - isEmpty Method: isEmpty should return true if stack is empty, false if not', () => {
      expect(stack.isEmpty()).be.true;
      stack.push('A');
      expect(stack.length).to.equal(1);
      expect(stack.contents['1']).to.equal('A');
      expect(stack.isEmpty()).be.false;
    });

    it('Peek Method: Should have a peek method on the cunstructors prototype', () => {
      expect(stack.__proto__).to.have.property('clear').to.be.a('function');
    });
    it('Challenge 6 - Peek Method: Peek method should return element at top of stack', () => {
      stack.push('A');
      stack.push('B');
      stack.push('C');
      expect(stack.peek()).to.equal('C');
      stack.pop();
      expect(stack.peek()).to.equal('B');
    });

    it('toString Method: Should have a toString method on the cunstructors prototype', () => {
      expect(stack.__proto__).to.have.property('toString').to.be.a('function');
    });
    it('Challenge 7 - toString Method: toString should return a string value representing the elements in the stack from bottom to top', () => {
      stack.push('A');
      stack.push('B');
      stack.push('C');
      stack.push('D');
      expect(stack.toString()).to.equal('ABCD');
    });

    it('toArray Method: Should have a toArray method on the cunstructors prototype', () => {
      expect(stack.__proto__).to.have.property('toArray').to.be.a('function');
    });
    it('Challenge 8 - toArray Method: toArray method should return an array containing the elements in the stack from bottom to top', () => {
      stack.push('A');
      stack.push('B');
      stack.push('C');
      stack.push('D');
      exect(stack.toArray()).to.eql(['A', 'B', 'C', 'D']);
    });

    it('Contains Method: Should have a contains method on the cunstructors prototype', () => {
      expect(stack.__proto__).to.have.property('contains').to.be.a('function');
    });
    it('Challenge 9 - Contains Method: Contains method should return true if value is in structure, false if not', () => {
      stack.push('A');
      stack.push('B');
      expect(stack.contains('A')).be.true;
      expect(stack.contains('B')).be.true;
      expect(stack.contains('C')).be.false;
    });
  });
});