function LinkedList () {
  this.head = null;
  this.tail = null;
}

function Node (value) {
  this.value = value;
  this.next = null;
}

// insert methods for linked list;


module.exports = {
  LinkedList,
  Node
}