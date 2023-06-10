import ListNode from "./lib/list_node";
import { createList, listToArray } from "./lib/utils";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return head;

  const sentinel = new ListNode(undefined, head);
  let slow: ListNode | null | undefined = sentinel;
  let fast: ListNode | null | undefined = head;

  while (n > 0) {
    fast = fast?.next;
    n -= 1;
  }

  while (fast) {
    fast = fast.next;
    slow = slow?.next;
  }

  if (slow && slow.next) slow.next = slow.next.next;
  return sentinel.next;
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
