/**
 * ************************************
 * @module  Stack
 * @author  david-dest01
 * @date    03/19/19
 * @description Begin the challenge below. 
 *              More Information: For more information on stack, please review section ____ within the README
 *              Testing Your Code: 
 *                - To test code, run npm test in terminal and complete everything under Stack Data Structure
 *                - For extensions, remove 'x' before describe on line 77 in testing file then save.
 * ************************************
 */


function Stack() {
  this.contents = {};
  this.length = 0;
};

/*
  * method: push
  * description: push method should add one or more value(s) to top of stack + adjust length, does not return value
  * example 1:
    - stack before: { '0': 'A' }
    - input: push('B')
    - stack after: { '0': 'A', '1': 'B' }

    example 2:
    - stack before: { '0': 'A' }
    - input: push('B', 'C', 'D')
    - stack after: { '0': 'A', '1': 'B', '2': 'C', '3': 'D' }
*/
Stack.prototype.push = function (...value) {
  // insert code here
};

/*
  * method: pop
  * description: pop method should return value from top of stack, removing it + reducing length by one
  * example 1:
    - stack before: { '0': 'A', '1': 'B', '2': 'C' }
    - output: 'C'
    - stack after: { '0': 'A', '1': 'B' }
*/
Stack.prototype.pop = function () {
  // insert code here
};

/*********************************************************/
/*               BONUS - EXTENSION METHODS               */
/*********************************************************/

/*
  * method: count
  * description: count method should return total values in stack
  * example 1:
    - s
    tack before: { '0': 'A', '1': 'B' }
    - output: 2
*/
Stack.prototype.count = function () {
  // place code here
};


/*
  * method: clear
  * description: clear method should remove all elements from stack + adjust length. nothing is returned
  * example 1:
    - stack before: { '0': 'A', '1': 'B' }
    - length before: 2
    ---------------------------------------
    - stack after: {}
    - length after: 0
*/
Stack.prototype.clear = function () {
  // place code here
};

/*
  * method: isEmpty
  * description: isEmpty should return a boolean value, true if stack is empty and false if stack has values
  * example 1:
    - stack: { '0': 'A' }
    - output: false
  * example 2:
    - stack: { }
    - output: true
*/
Stack.prototype.isEmpty = function () {
  // place code here
};

/*
  * method: peek
  * description: peek method should return value at top of stack without removing it
  * example:
    - stack: { '0': 'A', '1': 'B', '2': 'C' }
    - output: 'C'
*/
Stack.prototype.peek = function () {
  // place code here
};

/*
  * method: toString
  * description: toString method should return a string containing all values in stack, from bottom of stack to top
  * example:
    - stack: { '0': 'A', '1': 'B', '2': 'C' }
    - output: 'ABC'
*/
Stack.prototype.toString = function () {
  // place code here
};

/*
  * method: toArray
  * description: toArray method should return an array containing all values,
  * example:
    - stack: { '0': 'A', '1': 'B', '2': 'C' }
    - output: ['A', 'B', 'C'] 
*/
Stack.prototype.toArray = function () {
  // place code here
};

/*
  * method: contains
  * description: contains method should return a boolean value, true if stack contains value & false if not
  * example 1:
    - stack: { '0': 'A', '1': 'B', '2': 'C' }
    - input: contains('B');
    - output: true
  * example 2:
    - stack: { '0': 'A', '1': 'B', '2': 'C' }
    - input: contains('Z');
    - output: false
*/
Stack.prototype.contains = function () {
  // place code here
};




// please do not touch
module.exports = Stack;