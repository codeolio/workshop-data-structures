/**
 * ********************************************************************************************************************************************
 * @module  Queue
 * @author  david-dest01
 * @date    03/19/19
 * @description Begin challenge below. 
 *              Details: For more information on Queue, please review section ____ within the README
 *              Testing Your Code: 
 *                - To test code, run npm test in terminal and complete everything under Queue data structure
 *                - For extensions, remove 'x' before describe on line ____ in testing file then save.
 * ********************************************************************************************************************************************
 */

function Queue() {
  this.contents = {};
  this.size = 0;    
};

/*
  CHALLENGE 1
  * method: enqueue
  * description: enqueue method adds a new element at the back of the queue
  * example 1 - single value:
    - queue before: { }
    - input: push('A')
    - queue after: { '0': 'A' }

    example 2 - multiple values: 
    - queue before: { '0': 'A' }
    - input: push('B', 'C', 'D')
    - queue after: { '0': 'A', '1': 'B', '2': 'C', '3': 'D' }
*/
Queue.prototype.enqueue = function (value) {
  // insert code here
};

/*
  CHALLENGE 2
  * method: dequeue
  * description: method removes the first element from the queue (the item at the from of th equeue). it also returns the removed element
  * example 1:
    - queue before: { '0': 'A', '1': 'B', '2': 'C' }
    - output: 'A'
    - queue after: { '0': 'B', '1': 'C' }
*/
Queue.prototype.dequeue = function () {
  // insert code here
};

/********************************************************************************************************************************/
/*                                             BONUS - EXTENSION METHODS                                                        */
/********************************************************************************************************************************/

/*
  CHALLENGE 3
  * method: count
  * description: returns the total number of elements in the queue.
  * example 1:
    - queue: { '0': 'A', '1': 'B' }
    - output: 2
  * example 2:
    - queue: {}
    - output: 0
*/
Queue.prototype.count = function () {
  // insert code here
};

/*
  CHALLENGE 4
  * method: clear
  * description: removes all elements from queue + resets length to 0. nothing is returned
  * example 1:
    - queue before: { '0': 'A', '1': 'B' }
    - length before: 2
    clear();
    - queue after: {}
    - length after: 0
*/
Queue.prototype.clear = function () {
  // insert code here
};

/*
  CHALLENGE 5
  * method: isEmpty
  * description: returns true if the queue does not contain any elements, and false if the queue size is greater than 0
  * example 1:
    - queue: { '0': 'A' }
    - output: false
  * example 2:
    - queue: {}
    - output: true
*/
Queue.prototype.isEmpty = function () {
  // insert code here
};

/*
  CHALLENGE 6
  * method: peek
  * description: should return the first element from queue (first to be removed) - should NOT remove the element from queue
  * example:
    - queue: { '0': 'A', '1': 'B', '2': 'C' }
    - output: 'A'
*/
Queue.prototype.peek = function () {
  // insert code here
};

/*
  CHALLENGE 7
  * method: toString
  * description: should return a string containing all values in queue, from first to last (0 -> n + 1) - if no elements, return empty string
  * example:
    - queue: { '0': 'A', '1': 'B', '2': 'C' }
    - output: 'ABC'
*/
Queue.prototype.toString = function () {
  // insert code here
};

/*
  CHALLENGE 8
  * method: toArray
  * description: should return an array containing all values
  * example:
    - queue: { '0': 'A', '1': 'B', '2': 'C' }
    - output: ['A', 'B', 'C'] 
*/
Queue.prototype.toArray = function () {
  // insert code here
};

/*
  CHALLENGE 9
  * method: contains
  * description: return true if queue contains inputed value, false if not
  * example 1:
    - queue: { '0': 'A', '1': 'B', '2': 'C' }
    - input: contains('B');
    - output: true
  * example 2:
    - queue: { '0': 'A', '1': 'B', '2': 'C' }
    - input: contains('Z');
    - output: false
*/
Queue.prototype.contains = function (value) {
  // insert code here
};

/* please do not touch */ 
module.exports = Queue;