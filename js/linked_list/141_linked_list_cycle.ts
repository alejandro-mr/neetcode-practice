import ListNode from "./lib/list_node";

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let [slow, fast]: [ListNode | null, ListNode | null] = [head, head];

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
}

function populateListWithCycle(values: number[], cycle?: number): ListNode {
  const head = new ListNode(values.shift());
  let current = head;
  let index = 0;

  let cycleNode: ListNode | null = null;
  for (let value of values) {
    const next = new ListNode(value);

    if (index === cycle) {
      cycleNode = current;
    }

    index += 1;

    current.next = next;
    current = next;

    if (index === values.length) {
      current.next = cycleNode;
    }
  }

  return head;
}

(() => {
  // Test cases

  // result: true
  let head = populateListWithCycle([3, 2, 0, -4], 1);
  console.log(hasCycle(head));

  head = populateListWithCycle([1, 2], 0);
  console.log(hasCycle(head));

  head = populateListWithCycle([1], -1);
  console.log(hasCycle(head));
})();
