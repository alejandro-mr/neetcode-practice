import MinHeap, { HeapItem } from './lib/min_heap';

export default function lastStoneWeight(stones: number[]): number {
  const heap: MinHeap<number> = new MinHeap();
  for (const stone of stones) {
    heap.push(new HeapItem(stone * -1, stone));
  }

  while (heap.size() > 1) {
    const stoneA = heap.pop();
    const stoneB = heap.pop();
    const smashed = (stoneA?.value || 0) - (stoneB?.value || 0);
    if (smashed > 0) heap.push(new HeapItem(smashed * -1, smashed));
  }

  return heap.pop()?.value || 0;
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([1]));
console.log(lastStoneWeight([1, 3]));
