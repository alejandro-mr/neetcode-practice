import ListNode from "./lib/list_node";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;

  let head: ListNode | null = null;
  let prev: ListNode | null = null;
  let carrying = 0;

  while (l1 || l2 || carrying > 0) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carrying;
    carrying = 0;

    if (sum >= 10) {
      sum = sum - 10;
      carrying = 1;
    }

    let node = new ListNode(sum, null);
    if (!head) {
      head = node;
    }
    if (prev) {
      prev.next = node;
    }
    prev = node;

    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }

  return head;
}

function _populateList(values: number[]): ListNode {
  const head = new ListNode(values.shift());
  let current = head;
  for (let value of values) {
    const next = new ListNode(value);
    current.next = next;
    current = next;
  }

  return head;
}

function _listToArray(head: ListNode | null): number[] {
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

  // result: [7, 0, 8]
  let l1 = _populateList([2, 4, 3]);
  let l2 = _populateList([5, 6, 4]);
  console.log(_listToArray(addTwoNumbers(l1, l2)));

  // result: [0]
  l1 = _populateList([0]);
  l2 = _populateList([0]);
  console.log(_listToArray(addTwoNumbers(l1, l2)));

  // result: [8, 9, 9, 9, 0, 0, 0, 1]
  l1 = _populateList([9, 9, 9, 9, 9, 9, 9]);
  l2 = _populateList([9, 9, 9, 9]);
  console.log(_listToArray(addTwoNumbers(l1, l2)));
})();
