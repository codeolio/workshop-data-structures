/**********************************************************************************************************************************************
 * @module  Stack
 * @author  david-dest01
 * @date    03/19/19
 * @description Begin Stack challenge below. 
 *              Details: For more information on Stack, please review section ____ within the README
 *              Testing Your Code: 
 *                - To test code, run npm test in terminal and complete everything under Stack data structure
 *                - For extensions, remove 'x' before describe on line 58 in testing file then save.
 **********************************************************************************************************************************************/

function Stack() {
  this.contents = {};
  this.size = 0;
};

/* CHALLENGE 1
  * method: push
  * description: 
    - push method should add one or more value(s) to top of stack + adjust length, does not return value
    - updates size
  * example 1 - single value:
    - stack before: { '0': 'A' }
    - input: push('B')
    - stack after: { '0': 'A', '1': 'B' }

    BONUS - adding multiple values
  * example 2 - multiple values: 
    - stack before: { '0': 'A' }
    - input: push('B', 'C', 'D')
    - stack after: { '0': 'A', '1': 'B', '2': 'C', '3': 'D' }
*/
Stack.prototype.push = function (...value) {
  // insert code here
};

/* CHALLENGE 2
  * method: pop
  * description: 
    - pop method should return value from top of stack, removing it + reducing length by one
    - updates size
  * example:
    - stack before: { '0': 'A', '1': 'B', '2': 'C' }
    - output: 'C'
    - stack after: { '0': 'A', '1': 'B' }
*/
Stack.prototype.pop = function () {
  // insert code here
};

/********************************************************************************************************************************/
/*                                             BONUS - EXTENSION METHODS                                                        */
/********************************************************************************************************************************/

/* CHALLENGE 3
  * method: count
  * description: returns the total number of elements in the queue.
  * example:
    - stack: { '0': 'A', '1': 'B' }
    - output: 2
*/
Stack.prototype.count = function () {
  // insert code here
};


/* CHALLENGE 4
  * method: clear
  * description: removes all elements from stack + resets length to 0. nothing is returned
  * example 1:
    - stack before: { '0': 'A', '1': 'B' }
    - length before: 2
    clear();
    - stack after: {}
    - length after: 0
*/
Stack.prototype.clear = function () {
  // insert code here
};

/* CHALLENGE 5
  * method: isEmpty
  * description: returns true if the stack does not contain any elements, and false if the stack size is greater than 0
  * example 1:
    - stack: { '0': 'A' }
    - output: false
  * example 2:
    - stack: {}
    - output: true
*/
Stack.prototype.isEmpty = function () {
  // insert code here
};

/* CHALLENGE 6
  * method: peek
  * description: peek method should return value at top of stack without removing it
  * example:
    - stack before: { '0': 'A', '1': 'B', '2': 'C' }
    - output: 'C'
    - stack after: { '0': 'A', '1': 'B', '2': 'C' }
*/
Stack.prototype.peek = function () {
  // insert code here
};

/* CHALLENGE 7
  * method: toString
  * description: should return a string containing all elements in stack. If no elements, return empty string
  * example:
    - stack: { '0': 'A', '1': 'B', '2': 'C' }
    - output: 'CBA'
*/
Stack.prototype.toString = function () {
  // insert code here
};

/* CHALLENGE 8
  * method: toArray
  * description: should return an array containing all values
  * example:
    - stack: { '0': 'A', '1': 'B', '2': 'C' }
    - output: ['C', 'B', 'A'] 
*/
Stack.prototype.toArray = function () {
  // insert code here
};

/* CHALLENGE 9
  * method: contains
  * description: return true if queue contains inputed value, false if not
  * example 1:
    - stack: { '0': 'A', '1': 'B', '2': 'C' }
    - input: contains('B');
    - output: true
  * example 2:
    - stack: { '0': 'A', '1': 'B', '2': 'C' }
    - input: contains('D');
    - output: false
*/
Stack.prototype.contains = function (value) {
  // insert code here
};


/* please do not touch */ 
module.exports = Stack;