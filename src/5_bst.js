/**********************************************************************************************************************************************
 * @module  BinarySearchTree
 * @author  david-dest01
 * @date    03/23/19
 * @description Begin Binary Search Tree challenge below. 
 *              Details: For more information on BinarySearchTree, please review section ____ within the README
 *              Testing Your Code: 
 *                - To test code, run npm test in terminal and complete everything under BinarySearchTree data structure
 *                - For extensions, remove 'x' before describe on line ____ in testing file then save.
 * ********************************************************************************************************************************************/

function BinarySearchTree (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

/* CHALLENGE 1
  * method: insert
  * description: insert a new value in the tree
    - insert a new value in the binary search tree
*/
BinarySearchTree.prototype.insert = function (value) {
  // insert code here
};

/* CHALLENGE 2
  * method: search
  * description: searches for the inputed value in the tree and returns true if it exists and false if the node does not
*/
BinarySearchTree.prototype.search = function (value) {
  // insert code here
};

/* CHALLENGE 3
  * method: inOrderTraverse
  * description: visits all nodes of the tree from smallest (minimum value to largest (maximum value)
*/
BinarySearchTree.prototype.inOrderTraverse = function (callback) {
  // insert code here
};

/* CHALLENGE 4
  * method: preOrderTraverse
  * description: visits all nodes from the root most node down to leaf nodes, starting on the left side of the tree then the right side of the tree
*/
BinarySearchTree.prototype.preOrderTraverse = function (callback) {
  // insert code here
};

/* CHALLENGE 5
  * method: postOrderTraverse
  * description: visits all nodes from the leaf nodes up to the root node, starting at the smallest node value
*/
BinarySearchTree.prototype.postOrderTraverse = function (callback) {
  // insert code here
};

/* CHALLENGE 6
  * method: breadthTraversal
  * description: visits each node by level, starting at the zeroith level (root node), and working its way down to nth level (leaf nodes)
*/
BinarySearchTree.prototype.breadthTraversal = function (callback) {
  // insert code here
};

/********************************************************************************************************************************/
/*                                             BONUS - EXTENSION METHODS                                                        */
/********************************************************************************************************************************/

/* CHALLENGE 7
  * method: min
  * description: returns the smallest value in tree
*/ 
BinarySearchTree.prototype.min = function () {
  // insert code here
};

// max - method returns the maximum value/key in the tree
/* CHALLENGE 8
  * method: max
  * description: returns the largest value in tree
*/ 
BinarySearchTree.prototype.max = function () {
  // insert code here
};

/* CHALLENGE 9
  * method: remove
  * description: removes value from tree, does NOT effect children values
*/ 
BinarySearchTree.prototype.remove = function (value) {
  // insert code here
};

/* please do not touch */ 
module.exports = BinarySearchTree;