/*********************************************************/
/*                     DO NOT EDIT                       */
/*********************************************************/
const expect = require('chai').expect;
const Stack = require('../src/2_stack.js')

xdescribe('Stack Data Structure', () => {
  let stack = null;

  describe('Stack: Pushing and Popping', () => {
    beforeEach(() => {
      stack = new Stack;
    });

    it('Should have a contents property that is an object and a length property initialized ata 0', () => {
      expect(stack.contents).to.be.a('object');
      expect(stack.size).to.be.a('number');
      expect(stack.size).to.equal(0);
    });

    it('Challenge 1: Push method should add a single value to the end of stack:', () => {
      expect(stack.__proto__).to.have.property('push').to.be.a('function');
      stack.push('A');
      stack.push('B'); 
      stack.push('C');
      expect(stack.contents['0']).to.equal('A');
      expect(stack.contents['1']).to.equal('B');
      expect(stack.contents['2']).to.equal('C');
      expect(stack.size).to.equal(3);
    });

    it('Challenge 1.5: Refactor push method so that it adds multiple values to the end of the stack:', () => {
      expect(stack.__proto__).to.have.property('push').to.be.a('function');
      stack.push('A');
      stack.push('B', 'C', 'D');
      expect(stack.contents['0']).to.equal('A');
      expect(stack.contents['1']).to.equal('B');
      expect(stack.contents['2']).to.equal('C');
      expect(stack.contents['3']).to.equal('D');
      expect(stack.size).to.equal(4);
    });

    it('Challenge 2: Should return the last value pushed to the stack WITHOUT going negative', () => {
      expect(stack.__proto__).to.have.property('push').to.be.a('function');
      stack.push('A');
      stack.push('B');
      stack.push('C');
      stack.push('D');
      expect(stack.pop()).to.equal('D');
      expect(stack.pop()).to.equal('C');
      expect(stack.pop()).to.equal('B');
      expect(stack.pop()).to.equal('A');
      expect(stack.pop()).to.be.undefined;
      expect(stack.size).to.equal(0);
    });
  });

  // EXTENSION TESTS - Remove 'x' before describe to activate
  xdescribe('Stack: Extension Methods', () => {
    beforeEach(() => {
      stack = new Stack;;
    });

    it('Challenge 3 - Count Method: Count method should return total values in stack', () => {
      expect(stack.__proto__).to.have.property('count').to.be.a('function'); 
      stack.push('A');
      expect(stack.count()).to.equal(1);
      stack.push('B');
      expect(stack.count()).to.equal(2);
      stack.push('C');
      expect(stack.count()).to.equal(3);
    });

    it('Challenge 4 - Clear Method: Clear method should empty stack but not delete stack. Does not return any value', () => {
      expect(stack.__proto__).to.have.property('clear').to.be.a('function');
      stack.push('A');
      stack.push('B');
      stack.push('C');
      expect(stack.size).to.equal(0);
      exepct(stack.clear()).to.be.undefined;
      expect(stack.size).to.equal(0);
      expect(stack.contents['0']).to.be.undefined;
      expect(stack.contents['1']).to.be.undefined;
      expect(stack.contents['2']).to.be.undefined;
    });

    it('Challenge 5 - isEmpty Method: isEmpty should return true if stack is empty, false if not', () => {
      expect(stack.__proto__).to.have.property('isEmpty').to.be.a('function');
      expect(stack.isEmpty()).be.true;
      stack.push('A');
      expect(stack.size).to.equal(1);
      expect(stack.contents['1']).to.equal('A');
      expect(stack.isEmpty()).be.false;
    });

    it('Challenge 6 - Peek Method: Peek method should return element at top of stack', () => {
      expect(stack.__proto__).to.have.property('clear').to.be.a('function');
      expect(stack.peek()).be.false;
      stack.push('A');
      stack.push('B');
      stack.push('C');
      expect(stack.peek()).to.equal('C');
      stack.pop();
      expect(stack.peek()).to.equal('B');
    });

    it('Challenge 7 - toString Method: toString should return a string value representing the elements in the stack from bottom to top', () => {
      expect(stack.__proto__).to.have.property('toString').to.be.a('function');
      stack.push('A');
      stack.push('B');
      stack.push('C');
      stack.push('D');
      expect(stack.toString()).to.equal('ABCD');
    });

    it('Challenge 8 - toArray Method: toArray method should return an array containing the elements in the stack from bottom to top', () => {
      expect(stack.__proto__).to.have.property('toArray').to.be.a('function');
      stack.push('A');
      stack.push('B');
      stack.push('C');
      stack.push('D');
      exect(stack.toArray()).to.eql(['A', 'B', 'C', 'D']);
    });

    it('Challenge 9 - Contains Method: Contains method should return true if value is in structure, false if not', () => {
      expect(stack.__proto__).to.have.property('contains').to.be.a('function');
      stack.push('A');
      stack.push('B');
      expect(stack.contains('A')).be.true;
      expect(stack.contains('B')).be.true;
      expect(stack.contains('C')).be.false;
    });
  });
});