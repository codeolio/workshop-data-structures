/*********************************************************/
/*                     DO NOT EDIT                       */
/*********************************************************/

const expect = require('chai').expect;
const { LinkedList, Node } = require('../src/4_linked_list.js')

describe('Linked List Structure', () => {
  let ll = null;
  
  describe('LinkedList: Adding and Removing', () => {
    beforeEach(() => {
      ll = new LinkedList;
      node = new Node;
    });
  
    it('Linked List should have a head pointer, tail pointer and a size default of 0', () => {
      expect(ll).to.have.a.property('head').to.be.null;
      expect(ll).to.have.a.property('tail').to.be.null;
      expect(ll).to.have.a.property('size').to.equal(0);
    });
  
    it('Node should have a value property and a next property both set to null by default', () => {
      expect(node).to.have.a.property('value');
      expect(node).to.have.a.property('next').to.be.null;
    });
    
    it('Challenge 1: Push should add single value to the end of the linked list', () => {
      expect(ll.__proto__).to.have.property('push').to.be.a('function');
      ll.push('A');
      expect(ll.head.value).to.equal('A');
      expect(ll.tail.value).to.equal('A');
      expect(ll.size).to.equal(1);
      ll.push('B');
      expect(ll.head.value).to.equal('A');
      expect(ll.tail.value).to.equal('B');
      expect(ll.size).to.equal(2);
      ll.push('C');
      expect(ll.head.value).to.equal('A');
      expect(ll.head.next.value).to.equal('B');
      expect(ll.tail.value).to.equal('C');
      expect(ll.size).to.equal(3);
    });

    it('Challenge 1.5: Adjust push so it adds multiple values to the end of the linked list', () => {
      expect(ll.__proto__).to.have.property('push').to.be.a('function');
      ll.push('A', 'B', 'C');
      expect(ll.head.value).to.equal('A');
      expect(ll.head.next.value).to.equal('B');
      expect(ll.tail.value).to.equal('C');
      expect(ll.size).to.equal(3);
    });

    it('Challenge 2: addToHead adds a new node to the head of the linked list', () => {
      expect(ll.__proto__).to.have.property('addToHead').to.be.a('function');
      expect(ll.head).to.be.null;
      expect(ll.tail).to.be.null;
      ll.addToHead('A');
      expect(ll.head).to.equal('A');
      expect(ll.tail).to.equal('A');
      expect(ll.head).to.equal(ll.tail);
      expect(ll.size).to.equal(1);
      ll.addToHead('B');
      expect(ll.head).to.equal('B');
      expect(ll.head.next.value).to.equal('A');
      expect(ll.tail).to.equal('A');
      expect(ll.size).to.equal(2);
    });

    it('Challenge 3: indexOf returns the index of the node in the list, if it doesn\'t exist in the list it returns -1', () => {
      expect(ll.__proto__).to.have.property('indexOf').to.be.a('function');
      ll.push('A');
      ll.push('B');
      ll.push('C');
      expect(ll.indexOf('A')).to.equal(0);
      expect(ll.indexOf('B')).to.equal(1);
      expect(ll.indexOf('C')).to.equal(2);
      expect(ll.indexOf('D')).to.equal(-1);
    });

    it('Challenge 4: remove method removes a node from the linked list', () => {
      expect(ll.__proto__).to.have.property('remove').to.be.a('function');
      ll.push('A');
      ll.push('B');
      ll.push('C');
      remove('B');
      expect(ll.head.value).to.equal('A');
      expect(ll.head.next.value).to.equal('C');
      expect(ll.tail.value).to.equal('C');
      expect(ll.size).to.equal(2);
      remove('C');
      expect(ll.head.value).to.equal('A');
      expect(ll.tail.value).to.equal('A');
      expect(ll.size).to.equal(1);
      remove('A');
      expect(ll.head).to.be.null;
      expect(ll.tail).to.be.null;
      expect(ll.size).to.equal(0);
    });

    it('Challenge 5: removes the head node of linked list, adjusts head pointer to subsequent node in linked list', () => {
      expect(ll.__proto__).to.have.property('removeHead').to.be.a('function');
      ll.push('A');
      ll.push('B');
      ll.push('C');
      expect(ll.head.value).to.equal('A');
      expect(ll.head.next.value).to.equal('B');
      expect(ll.head.next.next.value).to.equal('C');
      expect(ll.tail).to.equal('C');
      expect(ll.size).to.equal(3);
      ll.removeHead(); // remove node A
      expect(ll.head.value).to.equal('B');
      expect(ll.head.next.value).to.equal('C');
      expect(ll.tail).to.equal('C');
      expect(ll.size).to.equal(2);
      ll.removeHead(); // remove node B
      expect(ll.head.value).to.equal('C');
      expect(ll.head.next).to.be.null;
      expect(ll.tail.value).to.equal('C');
      expect(ll.size).to.equal(1);
      ll.removeHead(); // remove node C
      expect(ll.head).to.be.null;
      expect(ll.tail).to.be.null;
      expect(ll.size).to.equal(0);
    });

    it('Challenge 6: removes tail node from linked list. adjusts tail pointer to point at preceding node', () => {
      expect(ll.__proto__).to.have.property('removeTail').to.be.a('function');
      ll.push('A');
      ll.push('B');
      ll.push('C');
      expect(ll.head.value).to.equal('A');
      expect(ll.head.next.value).to.equal('B');
      expect(ll.head.next.next.value).to.equal('C');
      expect(ll.tail).to.equal('C');
      expect(ll.size).to.equal(3);
      ll.removeTail(); // remove node C
      expect(ll.head.value).to.equal('A');
      expect(ll.head.next.value).to.equal('B');
      expect(ll.tail).to.equal('B');
      expect(ll.size).to.equal(2);
      ll.removeHead(); // remove node B
      expect(ll.head.value).to.equal('A');
      expect(ll.head.next).to.be.null;
      expect(ll.tail.value).to.equal('A');
      expect(ll.size).to.equal(1);
      ll.removeHead(); // remove node A
      expect(ll.head).to.be.null;
      expect(ll.tail).to.be.null;
      expect(ll.size).to.equal(0);
    });

    it('Challenge 7: getByIndex retrives nove value based on provided index, returns -1 if not present', () => {
      expect(ll.__proto__).to.have.property('getByIndex').to.be.a('function');
      ll.push('A');
      ll.push('B');
      ll.push('C');
      expect(ll.getByIndex(0)).to.equal('A');
      expect(ll.getByIndex(1)).to.equal('B');
      expect(ll.getByIndex(2)).to.equal('C');
      expect(ll.getByIndex(3)).to.equal(-1);
    });
  });
    
  xdescribe('Linked List Extension Methods', () => {

    beforeEach(() => {
      ll = new LinkedList;
    });

    it('Challenge 8: removeByIndex removes node at given index', () => {
      expect(ll.__proto__).to.have.property('removeByIndex').to.be.a('function');
      ll.push('A');
      ll.push('B');
      ll.push('C');
      ll.push('D');
      expect(ll.head.value).to.equal('A'); 
      expect(ll.removeByIndex(0)).to.equal('A');
      expect(ll.head.value).to.equal('B');
      expect(ll.head.next.value).to.equal('C'); 
      expect(ll.size).to.equal(3);
      expect(ll.removeByIndex(1)).to.equal('C');
      expect(ll.head.next.value).to.equal('D');
      expect(ll.size).to.equal(2);
      expect(ll.removeByIndex(1)).to.equal('D');
      expect(ll.head.value).to.equal('B');
      expect(ll.head.next.value).to.equal('B');
      expect(ll.tail.value).to.equal('B');
      expect(ll.size).to.equal(1);
    });

    it('Challenge 9: isEmpty returns true if the linked list does not contain any nodes, and false if the size is bigger than 0', () => {
      expect(ll.__proto__).to.have.property('isEmpty').to.be.a('function');
      expect(ll.isEmpty()).be.true;
      ll.push('A');
      expect(ll.isEmpty()).be.false;
      ll.push('B');
      expect(ll.isEmpty()).be.false;
    });

    it('Challenge 10: toString returns a string representation of linked list', () => {
      expect(ll.__proto__).to.have.property('isEmpty').to.be.a('function');
      expect(ll.toString()).to.equal('');
      ll.push('A');
      ll.push('B');
      ll.push('C');
      expect(ll.toString()).to.be.a('string').to.equal('ABC'); // test this
    });

    it('Challenge 11: toArray returns an array representation of linked list', () => {
      expect(ll.__proto__).to.have.property('toArray').to.be.a('function');
      expect(ll.toArray()).to.equal([]);
      ll.push('A');
      ll.push('B');
      ll.push('C');
      expect(ll.toArray()).to.be.an('array').to.eql(['A', 'B', 'C']); // test this
    });

    it('Challenge 12: getHead retrieves the value from the first node of the list (head)', () => {
      expect(ll.__proto__).to.have.property('getHead').to.be.a('function');
      expect(ll.getHead()).to.equal(null);
      ll.push('A');
      expect(ll.getHead()).to.equal('A');
      ll.push('B');
      expect(ll.getHead()).to.equal('A');
    });

    it('Challenge 13: getTail retrieves the value from the first node of the list (head)', () => {
      expect(ll.__proto__).to.have.property('getTail').to.be.a('function');
      expect(ll.getTail()).to.equal(null);
      ll.push('A');
      expect(ll.getTail()).to.equal('A');
      ll.push('B');
      expect(ll.getTail()).to.equal('B');
      ll.push('B');
      expect(ll.getTail()).to.equal('C');
    });

    it('Challenge 12: size returns the total number of nodes in linked list ', () => {
      expect(ll.__proto__).to.have.property('size').to.be.a('function');
      expect(ll.size()).to.equal(0);
      ll.push('A');
      expect(ll.size()).to.equal(1);
      ll.push('B');
      expect(ll.size()).to.equal(2);
      ll.push('B');
      expect(ll.size()).to.equal(3);
    });
  })
});