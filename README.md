# CODEOLIO: Intro to Data Structures

## Overview

// write a quick overview


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



### Queue



### Singly Linked List


### Binary Search Tree




