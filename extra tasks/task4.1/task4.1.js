class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addNode(value, ind) {
    const node = new Node(value);
    let current = this.head;
    let prev = null;
    let i = 0;

    if (!ind) {
      if (this.length === 0) {
        this.head = new Node(value);
      } else {
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      this.length++;
      console.log(node);
    }

    if (ind < 0 || ind > this.length) {
      return false;
    }

    if (ind && ind === 0) {
      node.next = this.head;
      this.head = node;
      console.log(node);
    } else
    if (ind) {
      while (i < ind) {
        prev = current;
        current = current.next;
        i++;
      }
      prev.next = node;
      node.next = current;
      console.log(node);
    }

    this.length++;
    return true;
  }

  removeNode(ind) {
    let current = this.head;
    let prev = null;
    let i = 0;

    if (ind === null) {
      while (current.next) {
        if (!current.next.next) {
          current.next = null;
        } else {
          current = current.next;
        }
      }
      /* while (i < this.length-1) {
          prev = current;
          current = current.next;
          i++;
        }
        prev.next = null; */
      console.log(`Remove last node = ${current.next.value}`);
      return true;
    }

    if (ind < 0 || this.length <= ind || this.length === 1) {
      throw new SyntaxError('No such a noda');
      // return false;
    }

    if (ind === 0) {
      this.head = current.next;
      console.log(`Remove 1st node = ${current.value}`);
    }

    if (ind) {
      while (i < ind) {
        prev = current;
        current = current.next;
        i++;
      }

      prev.next = current.next;
      console.log(`Remove node = ${current.value}`);
    }

    this.length--;
    return true;
  }

  print() {
    let current = this.head;
    console.log('--------------------------');
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    console.log('--------------------------');
  }
}

const nodes = new LinkedList();

// nodes.addNode('1st element');
nodes.addNode('1st noda', 0);
nodes.addNode('2nd noda', 1);
nodes.addNode('Inserted noda', 1);
nodes.addNode('3d noda');
nodes.addNode('4d noda');

// nodes.print();

nodes.removeNode(1);
nodes.print();
nodes.removeNode(1);
nodes.print();
nodes.removeNode(0);
nodes.print();
nodes.removeNode();
nodes.print();
nodes.removeNode(-5);
nodes.print();
