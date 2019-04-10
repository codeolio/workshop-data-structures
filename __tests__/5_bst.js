/*********************************************************/
/*                     DO NOT EDIT                       */
/*********************************************************/

const expect = require('chai').expect;
const BinarySearchTree = require('../src/5_bst.js');

describe('Binary Search Tree Data Structures', () => {

  let bst = null;
  
  describe('Binary Search Tree: Adding, Removing and Traversing', () => {

    before(() => {
      bst = new BinarySearchTree;
    });
  
    it('Binary Search Tree should have a value property, left property and right property pointing at null values', () => {
      expect(bst).to.have.a.property('value');
      expect(bst).to.have.a.property('left').to.be.null;
      expect(bst).to.have.a.property('right').to.be.null;
    });
    
    it('Challenge 1: Insert should add a new value (subtree) to tree', () => {
      expect(bst.__proto__).to.have.property('insert').to.be.a('function');
      const treeValues = [10, 5, 8, 1, 15, 13, 17];
      treeValues.forEach((value) => {
        bst.insert(value);
      });
      /* ----------   root node   ---------- */
      expect(bst.value).to.equal(10);
      /* ----------   left brach  ---------- */
      expect(bst.left.value).to.equal(5);
      expect(bst.left.left.value).to.equal(1);
      expect(bst.left.right.value).to.equal(8);
      /* ----------   right brach ---------- */
      expect(bst.right.value).to.equal(15);
      expect(bst.right.left.value).to.equal(13);
      expect(bst.right.right.value).to.equal(17);
    });

    it('Challenge 2: searches for the key in the tree and returns true if it exists and false if the node does not', () => {
      expect(bst.__proto__).to.have.property('contains').to.be.a('function');
      /* ----------   valid subtrees ---------- */
      expect(bst.contains(10)).to.be.true;
      expect(bst.contains(5)).to.be.true;
      expect(bst.contains(1)).to.be.true;
      expect(bst.contains(8)).to.be.true;
      expect(bst.contains(15)).to.be.true;
      expect(bst.contains(13)).to.be.true;
      expect(bst.contains(17)).to.be.true;
      /* ----------  nvalid subtrees ---------- */
      expect(bst.contains(11)).to.be.false;
      expect(bst.contains(20)).to.be.false;
      expect(bst.contains(3)).to.be.false;
      expect(bst.contains(6)).to.be.false;
    });

    it('Challenge 3: inOrderTraverse() visits all nodes of the tree using in-order traverse', () => {
      expect(bst.__proto__).to.have.property('inOrderTraverse').to.be.a('function');
      const results = [];
      const callback = (value) => results.push(value);
      bst.inOrderTraverse(callback);
      expect(results).to.have.ordered.members([1, 5, 8, 10, 13, 15, 17]);
    });

    it('Challenge 4: preOrderTraverse() visits all nodes of the tree using pre-order traverse', () => {
      expect(bst.__proto__).to.have.property('preOrderTraverse').to.be.a('function');
      const results = [];
      const callback = (value) => results.push(value);
      bst.preOrderTraverse(callback);
      expect(results).to.have.ordered.members([10, 5, 1, 8, 15, 13, 17]);
    });

    it('Challenge 5: postOrderTraverse() vists all nodes of the tree using post-order traverse', () => {
      expect(bst.__proto__).to.have.property('postOrderTraverse').to.be.a('function');
      const results = [];
      const callback = (value) => results.push(value);
      bst.postOrderTraverse(callback);
      expect(results).to.have.ordered.members([1, 8, 5, 13, 17, 15, 10]); 
    });

    it('Challenge 6: breadthTraversal() vists all nodes of the tree by level', () => {
      expect(bst.__proto__).to.have.property('breadthTraversal').to.be.a('function');
      const results = [];
      const callback = (value) => results.push(value);
      bst.postOrderTraverse(callback);
      expect(results).to.have.ordered.members([10, 5, 15, 1, 8, 13, 17]); 
    });
  });
    
  xdescribe('Binary Search Trees Extension Methods', () => {

    before(() => {
      bst = new BinarySearchTree;
      const treeValues = [10, 5, 8, 1, 15, 13, 17];
      treeValues.forEach((value) => {
        bst.insert(value);
      });
    });

    it('Challenge 7: Min returns the minimum value/key in the tree', () => {
      expect(bst.__proto__).to.have.property('min').to.be.a('function');
      expect(bst.min()).to.equal(1);
    });

    it('Challenge 8: Max returns the maximum value/key in the tree', () => {
      expect(bst.__proto__).to.have.property('max').to.be.a('function');
      expect(bst.max()).to.equal(17);
    });

    it('Challenge 9: Remove should remove the key from the tree', () => {
      expect(bst.__proto__).to.have.property('remove').to.be.a('function');
      bst.remove(1)
      bst.remove(15);
      /* ----------   root node   ---------- */
      expect(bst.value).to.equal(10);
      /* ----------   left brach  ---------- */
      expect(bst.left.value).to.equal(5);
      expect(bst.left.left.value).to.be.null;
      expect(bst.left.right.value).to.equal(8);
      /* ----------   right brach ---------- */
      expect(bst.right).to.be.null;
    });
  })
});