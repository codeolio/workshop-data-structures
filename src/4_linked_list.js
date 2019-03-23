/**
 * ********************************************************************************************************************************************
 * @module  LinkedList
 * @author  david-dest01
 * @date    03/23/19
 * @description Begin challenge below. 
 *              Details: For more information on LinkedList, please review section ____ within the README
 *              Testing Your Code: 
 *                - To test code, run npm test in terminal and complete everything under LinkedList data structure
 *                - For extensions, remove 'x' before describe on line ____ in testing file then save.
 * ********************************************************************************************************************************************
 */

function LinkedList () {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

function Node (value) {
  this.value = value;
  this.next = null;
}

/* X
  CHALLENGE 1
  * method: push
  * description: adds a new node to the end of the linked list
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
LinkedList.prototype.push = function (value) {
  // insert code here
};

/* X
  CHALLENGE 2
  * method: addToHead
  * description: adds a new node to the head of the linked list
  * example 1 - single value:
    - queue before: 
    - input:
    - queue after: 
*/
LinkedList.prototype.addToHead = function(value) {
  // insert code here
};

/* X
  CHALLENGE 3
  * method: indexOf
  * description: returns the index of the node in the list, if it doesn't exist in the list it returns -1
  * example 1 - single value:
    - queue before: 
    - input:
    - queue after: 
*/
LinkedList.prototype.indexOf = function (element) {
  // insert code here
};

/* X
  CHALLENGE 4
  * method: remove
  * description: removes a node from the linked list
  * example 1 - single value:
    - queue before: 
    - input:
    - queue after: 
*/
LinkedList.prototype.remove = function (element) {

};

/*
  CHALLENGE 6
  * method: removeHead
  * description: removes the head node of linked list, adjusts head pointer to subsequent node in linked list
  * example 1 - single value:
    - queue before: 
    - input:
    - queue after: 
*/
LinkedList.prototype.removeHead = function(value) {
  // insert code here
};


/*
  CHALLENGE 7
  * method: removeTail
  * description: removes tail node from linked list. adjusts tail pointer to point at preceding node
  * example 1 - single value:
    - queue before: 
    - input:
    - queue after: 
*/
LinkedList.prototype.removeTail = function(value) {
  // insert code here
};

/********************************************************************************************************************************/
/*                                             BONUS - EXTENSION METHODS                                                        */
/********************************************************************************************************************************/

/* X
  CHALLENGE 8
  * method: remove
  * description: removes node at given index
  * example 1 - single value:
    - queue before: 
    - input:
    - queue after: 
*/ 
LinkedList.prototype.removeByIndex = function(index) {
  // insert code here
};

/* X
  CHALLENGE 9
  * method: isEmpty 
  * description: returns true if the linked list does not contain any nodes, and false if the size is bigger than 0
  * example 1 - single value:
    - queue before: 
    - input:
    - queue after: 
*/ 
LinkedList.prototype.isEmpty = function() {
  // insert code here
};

/* X
  CHALLENGE 10
  * method: toString
  * description: returns a string representation of linked list
  * example 1 - single value:
    - queue before: 
    - input:
    - queue after: 
*/ 
LinkedList.prototype.toString = function () {
  // insert code here
};

/* X
  CHALLENGE 11
  * method: toArray
  * description: returns and array representation of linked list
  * example 1 - single value:
    - queue before: 
    - input:
    - queue after: 
*/ 
LinkedList.prototype.toArray = function () {
  // insert code here
};

/* X
  CHALLENGE 12
  * method: getByIndex
  * description: retrives nove value based on provided index
  * example 1 - single value:
    - queue before: 
    - input:
    - queue after: 
*/ 
LinkedList.prototype.getByIndex = function (index) {
  // insert code here
};

/* X
  CHALLENGE 13
  * method: getHead
  * description: retrieves the value from the first node of the list (head)
  * example 1 - single value:
    - queue before: 
    - input:
    - queue after: 
*/ 
LinkedList.prototype.getHead = function () {
  // insert code here
};

/*
  CHALLENGE 14
  * method: getTail
  * description: retrieves last value from the last node in the list (tail)
  * example 1 - single value:
    - queue before: 
    - input:
    - queue after: 
*/ 
LinkedList.prototype.getTail = function () {
  // insert code here
};

/*
  CHALLENGE 15
  * method: size
  * description: returns the total number of nodes in linked list 
  * example 1 - single value:
    - queue before: 
    - input:
    - queue after: 
*/ 
LinkedList.prototype.size = function () {
  // insert code here
};

/* please do not touch */ 
module.exports = {
  LinkedList,
  Node
}