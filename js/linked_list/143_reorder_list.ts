import ListNode from "./lib/list_node";
import ListUtils from "./lib/utils";

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;

  let nodes = [head];
  while (head.next) {
    head = head.next;
    nodes = [...nodes, head];
  }

  head = nodes.shift() || null;
  let tail = nodes.pop() || null;

  while (tail || head) {
    if (head) head.next = tail || null;
    head = nodes.shift() || null;
    if (tail) tail.next = head || null;
    tail = nodes.pop() || null;
  }
}

(() => {
  // Test cases

  // result: [1, 4, 2, 3]
  let head = ListUtils.createList([1, 2, 3, 4]);
  reorderList(head);
  console.log(ListUtils.listToArray(head));

  // result: [1, 5, 2, 4, 3]
  head = ListUtils.createList([1, 2, 3, 4, 5]);
  reorderList(head);
  console.log(ListUtils.listToArray(head));

  // result: [1]
  head = ListUtils.createList([1]);
  reorderList(head);
  console.log(ListUtils.listToArray(head));
})();
