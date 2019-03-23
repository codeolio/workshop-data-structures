/*********************************************************/
/*                     DO NOT EDIT                       */
/*********************************************************/
const expect = require('chai').expect;
const Queue = require('../src/3_queue.js')

xdescribe('Queue Data Structure', () => {
  let queue = null;

  describe('Queue: Enqueing and Dequeing', () => {
    beforeEach(() => {
      queue = new Queue;
    });

    it('Should have a contents property that is an object and a length property initialized at 0', () => {
      expect(queue.contents).to.be.a('object');
      expect(queue.size).to.be.a('number');
      expect(queue.size).to.equal(0);
    });

    it('Challenge 1: enqueue should add single value to the end of the queue', () => {
      expect(queue.__proto__).to.have.property('enqueue').to.be.a('function');
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');
      expect(queue.contents['0']).to.equal('A');
      expect(queue.contents['1']).to.equal('B');
      expect(queue.contents['2']).to.equal('C');
      expect(queue.size).to.equal(3);
    });

    it('Challenge 1.5: refactor enqueue to add multiple values to the end of the queue', () => {
      queue.enqueue('A');
      queue.enqueue('B', 'C', 'D');
      expect(queue.contents['0']).to.equal('A');
      expect(queue.contents['1']).to.equal('B');
      expect(queue.contents['2']).to.equal('C');
      expect(queue.contents['3']).to.equal('D');
      expect(queue.size).to.equal(4);
    });
    
    it('Challenge 2: Should return the first value push to the stack WITHOUT going negative', () => {
      expect(queue.__proto__).to.have.property('dequeue').to.be.a('function');;
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');
      expect(queue.dequeue()).to.equal('A');
      expect(queue.dequeue()).to.equal('B');
      expect(queue.dequeue()).to.equal('C');
      expect(queue.dequeue()).to.be.undefined;
      expect(queue.size).to.equal(0);
    });
  });
  
  xdescribe('Queue Extension Methods', () => {
    beforeEach(() => {
      queue = new Queue;
    });

    it('Challenge 3 - Count Method: Count method should return total values in queue', () => {
      expect(queue.__proto__).to.have.property('count').to.be.a('function');
      queue.enqueue('A');
      expect(queue.count()).to.equal(1);
      queue.enqueue('B');
      expect(queue.count()).to.equal(2);
      queue.enqueue('C');
      expect(queue.count()).to.equal(3);
    });

    it('Challenge 4 - Clear Method: Clear method should empty queue but not delete stack. Does not return any value', () => {
      expect(queue.__proto__).to.have.property('clear').to.be.a('function');
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');
      expect(queue.size).to.equal(0);
      exepct(queue.clear()).to.be.undefined;
      expect(queue.size).to.equal(0);
      expect(queue.contents['0']).to.be.undefined;
      expect(queue.contents['1']).to.be.undefined;
      expect(queue.contents['2']).to.be.undefined;
    });

    it('Challenge 5 - isEmpty: isEmpty should return true if queue is emptuy, false if not', () => {
      expect(queue.__proto__).to.have.property('isEmpty').to.be.a('function');
      expect(queue.isEmpty()).be.true;
      queue.enqueue('A');
      expect(queue.size).to.equal(1);
      expect(queue.contents['1']).to.equal('A');
      expect(queue.isEmpty()).be.false;
    });

    it('Challenge 6 - Peek Method: Peek method should return element at the beginning of the stack', () => {
      expect(queue.__proto__).to.have.property('peek').to.be.a('function');
      expect(queue.peek()).be.false;
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');
      expect(queue.peek()).to.equal('A');
      queue.dequeue();
      expect(queue.peek()).to.equal('B');
    });

    it('Challenge 7 - toString: toString should return a string value representing stack values from front to end', () => {
      expect(queue.__proto__).to.have.property('toString').to.be.a('function');
      queue.enqueu('A');
      queue.enqueu('B');
      queue.enqueu('C');
      queue.enqueu('D');
      expect(queue.toString()).to.equal('ABCD');
    });

    it('Challenge 8 - to Array: toArray method return an array containing the values in the queue from beginning to end', () => {
      expect(queue.__proto__).to.have.property('toArray').to.be.a('function');
      queue.enqueu('A');
      queue.enqueu('B');
      queue.enqueu('C');
      queue.enqueu('D');
      exect(queue.toArray()).to.eql(['A', 'B', 'C', 'D']);
    });

    it('Challenge 9 - Contains Method: Contains method should return true if value is in queue, false if not', () => {
      expect(queue.__proto__).to.have.property('contains').to.be.a('function');     
      queue.enqueue('A');
      queue.enqueue('B');
      expect(queue.contains('A')).be.true;
      expect(queue.contains('B')).be.true;
      expect(queue.contains('C')).be.false;
    });
  })
});