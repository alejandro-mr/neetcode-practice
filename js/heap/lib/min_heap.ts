interface IHeapITem<T> {
  readonly priority: number;
  readonly value: T;
}

interface IMinHeap<T> {
  size(): number;
  peek(): HeapItem<T> | undefined;
  push(item: HeapItem<T>): void;
  pop(): HeapItem<T> | undefined;
}

class HeapItem<T> implements IHeapITem<T> {
  #priority: number;
  #value: T;

  constructor(priority: number, value: T) {
    this.#priority = priority;
    this.#value = value;
  }

  get priority(): number {
    return this.#priority;
  }

  get value(): T {
    return this.#value;
  }
}

class MinHeap<T> implements IMinHeap<T> {
  #heap: (HeapItem<T> | undefined)[];

  constructor() {
    this.#heap = [];
  }

  size(): number {
    return this.#heap.length;
  }

  peek(): HeapItem<T> | undefined {
    return this.#heap[0];
  }

  push(item: HeapItem<T>) {
    this.#heap.push(item);
    this.bubbleUp();
  }

  pop(): HeapItem<T> | undefined {
    const min = this.#heap[0];
    this.#heap[0] = this.#heap[this.size() - 1];
    this.#heap.pop();
    this.bubbleDown();
    return min;
  }

  private bubbleUp() {
    let index = this.size() - 1;

    while (index > 0) {
      const node = this.#heap[index];
      if (!node) break;

      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.#heap[parentIndex];
      if (!parent) break;

      if (parent.priority <= node.priority) break;

      [this.#heap[index], this.#heap[parentIndex]] = [
        this.#heap[parentIndex],
        this.#heap[index],
      ];
      index = parentIndex;
    }
  }

  private bubbleDown() {
    let index = 0;
    let min = index;

    while (index < this.size()) {
      const node = this.#heap[index];
      if (!node) break;

      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      const left = this.#heap[leftIndex];
      const right = this.#heap[rightIndex];

      if (!left) break;

      if (
        (left && left.priority < node.priority) ||
        (right && right.priority < node.priority)
      ) {
        if (right) {
          min = left.priority < right.priority ? leftIndex : rightIndex;
        } else {
          min = leftIndex;
        }
      }

      if (min === index) break;

      [this.#heap[min], this.#heap[index]] = [
        this.#heap[index],
        this.#heap[min],
      ];
      index = min;
    }
  }
}

export default MinHeap;
export { MinHeap, HeapItem };
