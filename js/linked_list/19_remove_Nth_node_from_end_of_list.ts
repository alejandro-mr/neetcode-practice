import ListNode from "./lib/list_node";
import { createList, listToArray } from "./lib/utils";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // first idea, we dump the nodes into an array in reverse order, and I'll only have to traverse the array N positions and remove that node.
  // O(n) complexity and O(n) extra space

  if (!head) return head;

  let nodes: Array<ListNode> = [head];
  while (head.next) {
    nodes.unshift(head.next);
    head = head.next;
  }

  if (n > nodes.length) return nodes.pop() || null;
  if (n === nodes.length) {
    nodes.pop();
    return nodes.pop() || null;
  }

  nodes[n].next = nodes[n - 1].next;
  return nodes.pop() || null;
}

(() => {
  // Test cases

  // result: [1, 2, 3, 5]
  let head = createList([1, 2, 3, 4, 5]);
  console.log(listToArray(removeNthFromEnd(head, 2)));

  // result: []
  head = createList([1]);
  console.log(listToArray(removeNthFromEnd(head, 1)));

  // result: [1]
  head = createList([1, 2]);
  console.log(listToArray(removeNthFromEnd(head, 1)));
})();
