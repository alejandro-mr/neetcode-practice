import ListNode from "./lib/list_node";

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (head && !head.next) return head;

  let prev: ListNode | null = null,
    current: ListNode | null = head;

  while (current) {
    let next: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

function populateList(values: number[]): ListNode {
  const head = new ListNode(values.shift());
  let current = head;
  for (let value of values) {
    const next = new ListNode(value);
    current.next = next;
    current = next;
  }

  return head;
}

function listToArray(head: ListNode | null): number[] {
  if (!head) return [];

  let current: ListNode | null = head;
  const values: number[] = [];
  while (current) {
    values.push(current.val);
    current = current.next;
  }

  return values;
}

(() => {
  // Test cases

  // result: [5, 4, 3, 2, 1]
  let head = populateList([1, 2, 3, 4, 5]);
  console.log(listToArray(reverseList(head)));

  // result: [2, 1]
  head = populateList([1, 2]);
  console.log(listToArray(reverseList(head)));

  // result: []
  console.log(listToArray(reverseList(null)));
})();
