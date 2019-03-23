/**
 * ********************************************************************************************************************************************
 * @module  Erray
 * @author  david-dest01
 * @date    03/23/19
 * @description Begin challenge below. 
 *              Details: For more information on Array, please review section ____ within the README
 *              Testing Your Code: 
 *                - To test code, run npm test in terminal and complete everything under Array data structure
 *                - For extensions, remove 'x' before describe on line ___ in testing file then save.
 * ********************************************************************************************************************************************
 */

function Erray () {
  this.contents = {};
  this.length = 0;
}

/* X
  CHALLENGE 1
  * method: push
  * description: adds a new elemetn to the end of the Erray
  * example 1 - single value:
    - queue before: 
    - input:
    - queue after: 

    BONUS
    example 2 - multiple values: 
    - queue before: 
    - input: 
    - queue after: 
*/
Erray.prototype.push = function (value) {
  // insert code here
};

/* X
  CHALLENGE 2
  * method: pop
  * description: removes and returns the last element from the Erray
  * example 1:
    - queue before: { '0': 'A', '1': 'B', '2': 'C' }
    - output: 'A'
    - queue after: { '0': 'B', '1': 'C' }
*/
Erray.prototype.pop = function () {
  // insert code here
};

/* X
  CHALLENGE 3
  * method: shift
  * description: adds a new element to the beginning of the Erray
  * example 1 - single value:
    - queue before: 
    - input:
    - queue after: 

  BONUS
  * description: refactor to add multiple elements to the beginning of Erray
  * example 2 - multiple values: 
    - queue before: 
    - input: 
    - queue after: 
*/
Erray.prototype.shift = function (value) {
  // insert code here
};

/* X
  CHALLENGE 4
  * method: unshift
  * description: removes the first element from the beginning of the Erray
  * example 1:
    - stack before:
    - output: 'C'
    - stack after: 
*/ 
Erray.prototype.unshift - function () {
  // insert code here
};

/* X
  CHALLENGE 5
  * method: indexOf
  * description: returns the position (index) of the first element in the Erray that matches the input value
  * example 1:
    - stack before:
    - output: 'C'
    - stack after: 
*/ 
Erray.prototype.indexOf = function (value) {
  // insert code here
};

/* X
  CHALLENGE 6
  * method: lastIndexOf
  * description: returns the position (index) of the last item in the Erray that matches the input value
  * example 1:
    - stack before:
    - output: 'C'
    - stack after: 
*/ 
Erray.prototype.lastIndexOf = function (value) {
  // insert code here
};


/* please do not touch */ 
module.exports = Erray;