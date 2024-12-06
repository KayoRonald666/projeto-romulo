class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class StackLinked {
  constructor() {
    this.top = null;
    this.lengthStack = 0;
  }

  push(value) {
    const node = new Node(value); 
    node.prev = this.top;
    this.top = node;
    this.lengthStack++;
  }

  pop() {
    if (this.isEmpty()) {
      return 'A pilha está vazia'; 
    }

    const nodeRemove = this.top;
    this.top = this.top.prev;
    this.lengthStack--;
    return nodeRemove.value;
  }

  peek() {
    if (this.isEmpty()) {
      return 'A pilha está vazia';
    }
    return this.top.value;
  }

  isEmpty() {
    return this.lengthStack === 0;
  }

  size() {
    return this.lengthStack;
  }
}

const stack = new StackLinked()


export {
  stack,
  StackLinked
}