class MyListNode {
  #val: number;
  #next: MyListNode | null;

  constructor(val: number, next: MyListNode | null = null) {
    this.#val = val;
    this.#next = next;
  }

  get val() {
    return this.#val;
  }

  get next(): MyListNode | null {
    return this.#next;
  }

  set next(node: MyListNode | null) {
    this.#next = node;
  }
}

class MyLinkedList {
  #nodes: (MyListNode | null)[];
  #head: MyListNode | null;
  #tail: MyListNode | null;

  constructor() {
    this.#nodes = [];
    this.#head = null;
    this.#tail = null;
  }

  get(index: number): number {
    const node = this.#nodes[index];
    if (!node) return -1;

    return node.val;
  }

  addAtHead(val: number): void {
    const node = new MyListNode(val, this.#head);
    this.#head = node;
    this.#nodes.unshift(node);

    if (!this.#tail) this.#tail = this.#head;
  }

  addAtTail(val: number): void {
    if (!this.#nodes.length || !this.#head) {
      this.addAtHead(val);
      return;
    }

    const node = new MyListNode(val);
    if (this.#tail) this.#tail.next = node;
    this.#tail = node;
    this.#nodes.push(node);
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.#nodes.length) return;

    if (!this.#nodes.length || !this.#head) {
      this.addAtHead(val);
      return;
    }

    // Check if index exist on array or index - 1
    const exists = this.#nodes[index];
    const prev = this.#nodes[index - 1];

    if (exists) {
      if (!prev) {
        // it means we are inserting at head
        this.addAtHead(val);
        return;
      }

      // replacing position
      const node = new MyListNode(val, exists);
      prev.next = node;
      this.#nodes.splice(index, 0, node);
      return;
    }
    if (prev) {
      const node = new MyListNode(val);
      prev.next = node;
      this.#nodes[index] = node;
      return;
    }
  }

  deleteAtIndex(index: number): void {
    const exists = this.#nodes[index];
    const prev = this.#nodes[index - 1];
    if (!exists) return;

    const next = exists.next;

    if (!prev) {
      // removing the head
      if (!next) {
        this.#head = null;
        this.#tail = null;
        this.#nodes = [];
        return;
      }
      this.#head = next;
      if (!next.next) this.#tail = this.#head;
      this.#nodes.splice(index, 1);
      return;
    }

    prev.next = exists.next;
    this.#nodes.splice(index, 1);
  }
}

export default MyLinkedList;
export { MyListNode, MyLinkedList };
