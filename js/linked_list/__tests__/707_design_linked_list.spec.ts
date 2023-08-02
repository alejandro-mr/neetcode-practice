import { describe, it, expect } from 'vitest';
import MyLiknedList, { MyLinkedList } from '../707_design_linked_list';

describe.concurrent('MyLinkedList', () => {
  it('Should return [null,null,-1]', async () => {
    const output: (null | number)[] = [];

    const list = new MyLinkedList();
    output.push(null);

    list.addAtIndex(1, 0);
    output.push(null);

    output.push(list.get(0));

    expect(output).toStrictEqual([null, null, -1]);
  });

  it('Should return [null, null, null, null, 2, null, 3]', async () => {
    const output: (null | number)[] = [];

    const list = new MyLinkedList();
    output.push(null);

    list.addAtHead(1);
    output.push(null);

    list.addAtTail(3);
    output.push(null);

    list.addAtIndex(1, 2);
    output.push(null);

    output.push(list.get(1));

    list.deleteAtIndex(1);
    output.push(null);

    output.push(list.get(1));

    expect(output).toStrictEqual([null, null, null, null, 2, null, 3]);
  });
});
