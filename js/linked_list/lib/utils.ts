import ListNode from "./list_node";

export function createList(values: number[]): ListNode | null {
  let val = values.shift();
  const head = val !== undefined ? new ListNode(val) : null;
  let current = head;
  for (let value of values) {
    const next = new ListNode(value);
    if (current) current.next = next;
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
