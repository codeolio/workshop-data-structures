/*********************************************************/
/*                     DO NOT EDIT                       */
/*********************************************************/

const expect = require('chai').expect;
const { LinkedList, Node } = require('../src/4_linked_list.js')

describe('Linked List Structure', () => {
  let ll = null;
  
  describe('Queue: Enqueing and Dequeing', () => {
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
      expect(queue.__proto__).to.have.property('push').to.be.a('function');
      ll.push('A');
      expect(ll.head.value).to.equal('A');
      expect(ll.tail.value).to.equal('A');
      ll.push('B');
      expect(ll.head.value).to.equal('A');
      expect(ll.tail.value).to.equal('B');
      ll.push('C');
      expect(ll.head.value).to.equal('A');
      expect(ll.head.next.value).to.equal('B');
      expect(ll.tail.value).to.equal('C');
      expect(ll.size).to.equal(3);
    });

    it('Challenge 1.5: Adjust push so it adds multiple values to the end of the linked list', () => {
      expect(queue.__proto__).to.have.property('push').to.be.a('function');
      ll.push('A', 'B', 'C');
      expect(ll.head.value).to.equal('A');
      expect(ll.head.next.value).to.equal('B');
      expect(ll.tail.value).to.equal('C');
      expect(ll.size).to.equal(3);
    });

    it('Challenge 2: Adjust push so it adds multiple values to the end of the linked list', () => {
      expect(queue.__proto__).to.have.property('addToHead').to.be.a('function');
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
      expect(ll.size).to.equal(1);
    });
  });
    
  xdescribe('Queue Extension Methods', () => {
    beforeEach(() => {
        queue = new Queue;
    });
  })
});