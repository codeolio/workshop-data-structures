# CODEOLIO: Intro to Data Structures

## Overview

Welcome to CODEOLIO's Intro to Data Structures workshop. This workshop is meant to give you the fundamentals of some important data structures, such as arrays, stacks, queues, linked lists and binary search trees. 

More challenges and data structures will be added in the feature, so be sure to keep an ear open for any updates. 

Some of the descriptions below may be high-level, so if necessary please use additional online resources to gain a better understanding of each data structure operation if there's any confusion. 

If you notice any errors, wish to make contributions or want to see something new/improved, please reach out! 


## Getting Started

Step 1: Fork this repository by clicking **fork**

Step 2: Clone this repository to your machine by clicking **Clone or Download** 
- If you do not have an IDE and Node installed on your machine, you can use https://gitpod.io. Follow the steps on gitpod to get setup
- If all dependencies are installed, open your terminal and run the command **git clone https://github.com/codeolio/workshop-data-structures.git**

Step 3: Install all dependencies in the package.json by running the command **npm install**

## Testing Your Code ##

Step 1: In your terminal run the command **npm test**

Step 2: On your first test, all unit tests should fail (You need to write some code!). Write some code that you think works. If you run it and see some green, you've passed!

### Dynamic Array
<img src="./assets/one-dimension-array.jgp">
The array is a basic abstract data structure that holds an ordered collection of items accessible by an integer index. The items held can be anything from primitive data types such as integers to more complex types like objects (even other arrays!). 

A mentioned above, array elements are stored in a given index and can be retrieved at a later time by specifying the same index. The way these indices work is specific to the implementation and programming language, but don't worry too much about that. 

The main difference between a static array and a dynamic array is the ability to grow in size. In some programming languages (not in JavaScript) you need to specify exactly how much memory you want to store. This makes sure you can reserve enough adjacent places in memory to place each element for the given structure. If you never want this size to grow larger than what's initially declared, then you would say this array is static because it will never contain more than 10 elements. 

A structure is considered to be dynamic if it is not fixed in size. For example, if we have 10 elements and want to add another, go for it! 

Again, depending on how this structure is being implemented, there may be some performance implications to increasing the size of an array. JavaScript treats arrays a bit differently than a compiled languge like Java, but no need to think too much about that for now. 

There's no better way to learn about what the array is and does than to build one yourself! Your challenges are below: 

- [ ] Challenge 1: ```push``` method should add a single value to the end of the array, adjust length
- [ ] Challenge 1.5: (BONUS!) Refactor your ```push``` method so that it can add multiple values to the end of the array, adjust length
- [ ] Challenge 2: ```pop``` should return the last value pushed to the array, adjust length (don't go negative!)
- [ ] Challenge 3: ```shift``` method should add one value to the beginning of the array, adjust length
- [ ] Challenge 3.5: (BONUS!) Refactor shift method so that it adds multiple values to the beginning of the array
- [ ] Challenge 4: ```unshift``` should remove and return the first element at the beginning of the array
- [ ] Challenge 5: ```indexOf``` should return the position (index) of the first element in the Erray that matches the input value
- [ ] Challenge 6: ```lastIndexOf``` should return the position (index) of the last item in the Erray that matches the input value

If you're not familiar with some of these methods, please refer to [MDN for more details](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#)


### Stack
<img src="./assets/stack-data-structure.png">


- [ ] Challenge 1: ```push``` method should add a single value to the top of the stack, adjust length
- [ ] Challenge 1.5: (BONUS!) Refactor your ```push``` method so that it can add multiple values to the top of the stack, adjust length
- [ ] Challenge 2: ```pop``` should return the last value pushed to the stack, adjust length (don't go negative!)
- [ ] Challenge 3: ```count``` method should return the total number of values/items in the stack
- [ ] Challenge 4: ```clear``` should remove all elements from the stack and adjust length, but should not delete the stack itself
- [ ] Challenge 5: ```isEmpty``` should return true if no items are in the stack, and false if it contains items
- [ ] Challenge 6: ```peek``` should return the value at the top of the stack without removing it
- [ ] Challenge 7: ```toString``` shuold return string representation of the stack, from top to bottom
- [ ] Challenge 8: ```toArray``` shuold return array representation of the stack, from top to bottom
- [ ] Challenge 9: ```contains``` should return true of the item is in the stack, false if not

### Queue
<img src="./assets/queue-data-structure.png">

- [ ] Challenge 1: ```enqueue``` should add single item to the end of the queue
- [ ] Challenge 1.5: (BONUS!) Refactor your ```enqueue``` method so that it can add multiple items to the end of the queue
- [ ] Challenge 2: ```dequeue``` should return the item at the beginning of the queue WITHOUT going negative
- [ ] Challenge 3: ```count``` should return the total number of items in the queue
- [ ] Challenge 4: ```clear``` should remove all items from the queue, but not delete the queue entirely
- [ ] Challenge 5: ```isEmpty``` shold return true if no items are in the queue, false if items do exist in queue
- [ ] Challenge 6: ```peek``` should return the element at the front of the queue
- [ ] Challenge 7: ```toString``` should return all items in the queue from end to beginning
- [ ] Challenge 8: ```toArray``` should return all items in the queue in an array from end to beginning
- [ ] Challenge 9: ```contains``` should return true if a specific value is in queue, false if not

### Singly Linked List
<img src="./assets/linked-list-singly.png">

- [ ] Challenge 1: ```push``` shoud add a new node to the end of the linked list, adjusts tail pointer
- [ ] Challenge 1.5: (BONUS!) Refactor your ```push``` method to add multiple nodes to end of linked list
- [ ] Challenge 2: ```addToHead``` adds a new node to the head of the linked list, adjusts head pointer
- [ ] Challenge 3: ```indexOf``` method should return the index of a specified value in the linked list. If the value does not exist, return -1
- [ ] Challenge 4: ```remove``` should remove the specified node from the linked list
- [ ] Challenge 5: ```removeHead``` method should remove the head node and adjust head pointer to point at subsequent node (if one exists)
- [ ] Challenge 6: ```removeTail``` method should remove the tail node and adjust tail pointer to point at the preceding node (if one exists)
- [ ] Challenge 7: ```getByIndex``` method should return the value of a node based on a specified index
- [ ] Challenge 8: ```removeByIndex``` method should remove a node based on given index 
- [ ] Challenge 9: ```isEmpty``` method should return true of no nodes are in linked list, false if nodes exist
- [ ] Challenge 10: ```toString``` method should return a string representation of the linked list
- [ ] Challenge 11: ```toArray``` method should return an array representation of the linked list
- [ ] Challenge 12: ```getHead``` method shoud return the head node value of the linked list
- [ ] Challenge 14: ```totalNodes``` method should return the total number of nodes in the linked list


### Binary Search Tree
<img src="./assets/binary-search-tree.png" width>

- [ ] Challenge 1: ```insert``` method should add a new value to the tree
- [ ] Challenge 2: ```contains``` takes a value and searches the tree for it. return true if the value is in the tree, false if not
- [ ] Challenge 3: ```inOrderTraverse``` method visit all nodes of the tree in order (least to greatest), executing a given callback on each node value
- [ ] Challenge 4: ```preOrderTraverse``` method visit all nodes of the tree in order from left to right visiting parent nodes first then children nodes (google more on pre-order traversal if you need more details)
- [ ] Challenge 5: ```postOrderTraverse``` method visit all nodes of the tree in order from left to right visiting child nodes first then parent nodes (google more on pre-order traversal if you need more details), working its way up to the root (last node visited)
- [ ] Challenge 6: ```breadthTraversal``` method should visit all nodes of binary search tree by level, starting at the 0th level (root node), and working its way down to the last level (deepest leaf),  executing a callback on each value
- [ ] Challenge 7: ```min``` method should return the smallest value in the binary search tree
- [ ] Challenge 8: ```max``` method should return the largest value in the binary search tree
- [ ] Challenge 9: ```remove``` method should remove a node from the BST without effecting any children nodes