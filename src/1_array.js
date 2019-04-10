/**********************************************************************************************************************************************
 * @module  MyArray
 * @author  david-dest01
 * @date    03/23/19
 * @description Begin Erray (Array Data Structure) challenge below. 
 *              Details: For more information on Array, please review section ____ within the README
 *              Testing Your Code: 
 *                - To test code, run npm test in terminal and complete everything under Array data structure
 *                - For extensions, remove 'x' before describe on line ___ in testing file then save.
 **********************************************************************************************************************************************/

function MyArray () {
  this.contents = {};
  this.length = 0;
}

/* CHALLENGE 1
  * method: push
  * description:
    - the push method adds a new element to the end of the Erray
    - updates length
  * example 1 - single value:
    - array before: { 0: 'A' }
    - input: push('B')
    - array after: { 0: 'A', 1: 'B' }

    BONUS - adding multiple values
  * example 2 - multiple values: 
    - array before: { 0: 'A' }
    - input: push('B', 'C', 'D')
    - array after: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' }
*/
MyArray.prototype.push = function (value) {
  // we have two properties, contents 
};

/* CHALLENGE 2
  * method: pop
  * description:
    - removes and returns the last element from the Erray
    - updates length
  * example:
    - array before: { '0': 'A', '1': 'B', '2': 'C' }
    - output: 
    - array before: { '0': 'A', '1': 'B' }
*/
MyArray.prototype.pop = function () {
  // insert code here
};

/* CHALLENGE 3
  * method: shift
  * description:
    - adds a new element to the beginning of the Erray
    - updates length
  * example 1 - single value:
    - array before: { 0: 'A' }
    - input: shift('B')
    - array after: { 0: 'B', 1: 'A' }

    BONUS - adding multiple values
  * example 2 - multiple values: 
    - array before: { 0: 'A' }
    - input: shift('B', 'C', 'D')
    - array after: { 0: 'B', 1: 'C', 2: 'D', 3: 'A' }
*/
MyArray.prototype.shift = function (value) {
  // insert code here
};

/* CHALLENGE 4
  * method: unshift
  * description:
    - removes the first element from the beginning of the Erray
    - updates length
  * example:
    - array before: { 0: 'A',  1: 'B', 2: 'C' }
    - input: unshift()
    - array after: { 0: 'B', 1: 'C' }
*/ 
MyArray.prototype.unshift = function () {
  // insert code here
};

/* CHALLENGE 5
  * method: indexOf
  * description: returns the position (index) of the first element in the Erray that matches the input value
  * example 1:
    - array: { 0: 'A', 1: 'B', 2: 'C', 3: 'B' }
    - input: indexOf('B')
    - output: 1
  * example 2:
    - input: indexOf('D')
    - output: -1
*/ 
MyArray.prototype.indexOf = function (value) {
  // insert code here
};

/* CHALLENGE 6
  * method: lastIndexOf
  * description: returns the position (index) of the last item in the Erray that matches the input value
  * example 1:
    - array: { 0: 'A', 1: 'B', 2: 'C', 3: 'B' }
    - input: indexOf('B')
    - output: 3
  * example 2:
    - input: indexOf('D')
    - output: -1
*/ 
MyArray.prototype.lastIndexOf = function (value) {
  // insert code here
};


/* please do not touch */ 
module.exports = MyArray;