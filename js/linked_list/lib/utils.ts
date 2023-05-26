import ListNode from "./list_node";

export function createList(values: number[]): ListNode {
  const head = new ListNode(values.shift());
  let current = head;
  for (let value of values) {
    const next = new ListNode(value);
    current.next = next;
    current = next;
  }

  return head;
}

export function listToArray(head: ListNode | null): number[] {
  if (!head) return [];

  let current: ListNode | null = head;
  const values: number[] = [];
  while (current) {
    values.push(current.val);
    current = current.next;
  }

  return values;
}

export default { createList, listToArray };
