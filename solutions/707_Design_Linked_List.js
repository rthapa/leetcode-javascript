class Node {
  constructor (val, next) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addAtHead (val) {
    if (this.length < 1) {
      const node = new Node(val, null);
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }

    const node = new Node(val, this.head);
    this.head = node;
    this.length++;
    return;
  }

  addAtTail (val) {
    if (this.length < 1) {
      const node = new Node(val, null);
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }

    const node = new Node(val, null);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return;
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.length) return this.addAtTail(val);

    let curr = this.head;
    let prev = null;
    let i = 0;
    while (index !== i++) {
      prev = curr;
      curr = curr.next;
    }
    
    const node = new Node(val, curr);
    // curr = node;
    prev.next = node;
    this.length++;
    return;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let curr = this.head;
    let prev = null;
    let i = 0;
    while (index !== i++){
      prev = curr;
      curr = curr.next;
    }
    
    if (curr) {
        prev.next = curr.next    
    } else {
        prev.next = null;
    }
    
    this.length--;
    return;
  }
  
  get (index) {
    if (index >= this.length || index < 0) return -1;
      
    if (index === this.length - 1) {
        return this.tail.val;
    }
    
    let curr = this.head;
    let i = 0;
    
    while (index !== i++) {
      curr = curr.next;
    }

    return curr.val;
  }
}