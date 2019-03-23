/**
 * ********************************************************************************************************************************************
 * @module  BinarySearchTree
 * @author  david-dest01
 * @date    03/23/19
 * @description Begin challenge below. 
 *              Details: For more information on BinarySearchTree, please review section ____ within the README
 *              Testing Your Code: 
 *                - To test code, run npm test in terminal and complete everything under BinarySearchTree data structure
 *                - For extensions, remove 'x' before describe on line ____ in testing file then save.
 * ********************************************************************************************************************************************
 */

function BinarySearchTree (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// insert(key) - inserts a new key in the tre
BinarySearchTree.prototype.insert = function (value) {
  // insert code here
};

// search(key) - searches for the key in the tree and returns true if it exists and false if the node does not
BinarySearchTree.prototype.search = function (value) {
  // insert code here
};

// inOrderTraverse() visits all nodes of the tree using in-order traverse
BinarySearchTree.prototype.inOrderTraverse = function (callback) {
  // insert code here
};

// preOrderTraverse() visits all nodes of the tree using pre-order traverse
BinarySearchTree.prototype.preOrderTraverse = function (callback) {
  // insert code here
};

// postOrderTraverse() vists all nodes of the tree using post-order traverse
BinarySearchTree.prototype.postOrderTraverse = function (callback) {
  // insert code here
};

/********************************************************************************************************************************/
/*                                             BONUS - EXTENSION METHODS                                                        */
/********************************************************************************************************************************/

// min - returns the minimum value/key in the tree
BinarySearchTree.prototype.min = function () {
  // insert code here
};

// max - method returns the maximum value/key in the tree
BinarySearchTree.prototype.max = function () {
  // insert code here
};

// remove(key) removes the key from the tree
BinarySearchTree.prototype.remove = function (value) {
  // insert code here
};

/* please do not touch */ 
module.exports = BinarySearchTree;