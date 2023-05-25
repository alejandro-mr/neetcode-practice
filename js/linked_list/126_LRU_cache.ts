class ListNode {
  #next: ListNode | null;
  #prev: ListNode | null;
  #value: number;
  readonly #key: number;

  constructor(key: number, value: number) {
    this.#key = key;
    this.#value = value;
    this.#next = null;
    this.#prev = null;
  }

  get next() {
    return this.#next;
  }
  get prev() {
    return this.#prev;
  }
  get key() {
    return this.#key;
  }
  get value() {
    return this.#value;
  }

  set next(node: ListNode | null) {
    this.#next = node;
  }
  set prev(node: ListNode | null) {
    this.#prev = node;
  }
  set value(value: number) {
    this.#value = value;
  }
}

class LinkedList {
  #head: ListNode | null;
  #tail: ListNode | null;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  moveToHead(node: ListNode | undefined): ListNode | undefined {
    if (!node) return;
    if (!this.#head) return;
    if (node === this.#head) return this.#head;

    if (node === this.#tail) {
      this.#tail = node.prev;
      if (node.prev) node.prev.next = null;
    }

    let prev = node.prev;
    let next = node.next;
    if (prev) prev.next = next;
    if (next) next.prev = prev;

    node.prev = null;
    node.next = this.#head;

    this.#head.prev = node;
    this.#head = node;

    return this.#head;
  }

  push(node: ListNode) {
    if (!node) return;
    // if head is empty, it means the list its new, we insert node into head and tail.
    if (this.isEmpty()) {
      this.#head = node;
      this.#tail = node;
    } else {
      if (!this.#head) return;
      // we insert new node at head of list, updating pointers

      node.next = this.#head;
      this.#head.prev = node;
      this.#head = node;
    }
    return this.#head;
  }

  isEmpty() {
    return this.#head === null && this.#tail === null;
  }

  deleteTail() {
    if (this.#tail) {
      let prev = this.#tail.prev;
      this.#tail.prev = null;

      if (prev) this.#tail = prev;
      this.#tail.next = null;
    }
  }

  get size() {
    let head = this.#head;
    let size = 0;

    while (head) {
      size += 1;
      head = head.next;
    }

    return size;
  }

  get tail() {
    return this.#tail;
  }

  get head() {
    return this.#head;
  }
}

class LRUCache {
  readonly #capacity: number;
  #nodes: Map<number, ListNode>;
  #list: LinkedList;

  constructor(capacity: number) {
    this.#capacity = capacity;
    this.#nodes = new Map();
    this.#list = new LinkedList();
  }

  get(key: number): number | null {
    // move position of node in list to most recently used position (aka HEAD)
    let node = this.#nodes.get(key);
    if (!node) return -1;

    node = this.#list.moveToHead(node);
    if (!node) return null;
    return node.value;
  }

  put(key: number, value: number): void {
    // if the key exists, we replace the current node in cache with the new one, and move it on the list to the head position.
    // if it doesn't exists, we create new node, check the capacity of our cache and replace the least recently used element (aka TAIL)
    //   after replacing we insert this new node at the HEAD
    let exists: ListNode | undefined = this.#nodes.get(key);
    if (exists) {
      // detachin node
      exists.value = value;
      this.#list.moveToHead(exists);
      this.#nodes.set(key, exists);
      return;
    }

    const node: ListNode = new ListNode(key, value);
    // check if capacity has been surpassed
    if (this.#list.size >= this.#capacity) {
      // replace least used element, and move the new one to head
      let tail = this.#list.tail;
      if (tail) this.#nodes.delete(tail.key);
      this.#list.deleteTail();
    }
    // insert new element at head
    this.#list.push(node);

    this.#nodes.set(key, node);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

function testLRUCache(
  commands: string[],
  values: number[][]
): (number | null)[] {
  let output: (number | null)[] = [];
  let cache: LRUCache | null = null;
  for (let i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case "LRUCache":
        cache = new LRUCache(values[i][0]);
        output.push(null);
        break;
      case "put":
        cache?.put(values[i][0], values[i][1]);
        output.push(null);
        break;
      case "get":
        const value = cache?.get(values[i][0]);
        if (value) output.push(value);
        if (!value) output.push(null);
        break;
    }
  }
  return output;
}

(() => {
  // Test cases

  // result: [null, null, null, 1, null, -1, null, -1, 3, 4]
  console.log(
    testLRUCache(
      [
        "LRUCache",
        "put",
        "put",
        "get",
        "put",
        "get",
        "put",
        "get",
        "get",
        "get",
      ],
      [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
    )
  );

  // result: [null, null, null, 2, null, null, -1]
  console.log(
    testLRUCache(
      ["LRUCache", "put", "put", "get", "put", "put", "get"],
      [[2], [2, 1], [2, 2], [2], [1, 1], [4, 1], [2]]
    )
  );

  // result: [null, null, null, null, null, -1, 3]
  console.log(
    testLRUCache(
      ["LRUCache", "put", "put", "put", "put", "get", "get"],
      [[2], [2, 1], [1, 1], [2, 3], [4, 1], [1], [2]]
    )
  );

  // result: [null, null, null, null, null, 4, 3, 2, -1, null, -1, 2, 3, -1, 5]
  console.log(
    testLRUCache(
      [
        "LRUCache",
        "put",
        "put",
        "put",
        "put",
        "get",
        "get",
        "get",
        "get",
        "put",
        "get",
        "get",
        "get",
        "get",
        "get",
      ],
      [
        [3],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [4],
        [3],
        [2],
        [1],
        [5, 5],
        [1],
        [2],
        [3],
        [4],
        [5],
      ]
    )
  );

  // result: [null, null, null, null, -1, null, null, 10, null, null, 29, null, 9, -1, -1, null, null, 5, null, -1]
  console.log(
    testLRUCache(
      [
        "LRUCache",
        "put",
        "put",
        "put",
        "get",
        "put",
        "put",
        "get",
        "put",
        "put",
        "get",
        "put",
        "get",
        "get",
        "get",
        "put",
        "put",
        "get",
        "put",
        "get",
      ],
      [
        [10],
        [7, 28],
        [7, 1],
        [8, 15],
        [6],
        [10, 27],
        [8, 10],
        [8],
        [6, 29],
        [1, 9],
        [6],
        [10, 7],
        [1],
        [2],
        [13],
        [8, 30],
        [1, 5],
        [1],
        [13, 2],
        [12],
      ]
    )
  );
})();
