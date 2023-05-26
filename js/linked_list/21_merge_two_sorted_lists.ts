import ListNode from "./lib/list_node";
import ListUtils from "./lib/utils";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  let head: ListNode | null = null;

  let headA: ListNode | null = list1;
  let headB: ListNode | null = list2;

  let prev: ListNode | null = null;
  while (headA || headB) {
    let valA = headA && headA.val ? headA.val : Number.POSITIVE_INFINITY;
    let valB = headB && headB.val ? headB.val : Number.POSITIVE_INFINITY;

    if (valA <= valB || !headB) {
      if (!head) head = headA;
      if (prev) {
        prev.next = headA;
        prev = prev.next;
      } else {
        prev = headA;
      }
      headA = headA?.next || null;
    } else {
      if (!head) head = headB;
      if (prev) {
        prev.next = headB;
        prev = prev.next;
      } else {
        prev = headB;
      }
      headB = headB?.next || null;
    }
  }

  return head;
}

(() => {
  // Test cases

  // result: [1, 1, 2, 3, 4, 4]
  let list1 = ListUtils.createList([1, 2, 4]);
  let list2 = ListUtils.createList([1, 3, 4]);

  console.log(ListUtils.listToArray(mergeTwoLists(list1, list2)));

  // result: []
  list1 = ListUtils.createList([]);
  list2 = ListUtils.createList([]);

  console.log(ListUtils.listToArray(mergeTwoLists(list1, list2)));

  // result: [0]
  list1 = ListUtils.createList([]);
  list2 = ListUtils.createList([0]);

  console.log(ListUtils.listToArray(mergeTwoLists(list1, list2)));
})();
