/*********************************************************/
/*                     DO NOT EDIT                       */
/*********************************************************/
const expect = require('chai').expect;
const Queue = require('../src/2_queue.js')

console.log(Queue);
describe('Queue Data Structure', () => {
  let queue = null;

  describe('Queue Constructor', () => { 
    before(() => {
        queue = new Queue;
    });

    it('Should have a contents property that is an object', () => {
      // insert logic for checking contents of queue
    });
    it('Should have a length property initialized at 0', () => {
      // insert logic for checking length property
    });
  });



});