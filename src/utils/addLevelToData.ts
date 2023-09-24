import { TableDataNested, Nested } from '../components/Table/Table.types';

/* eslint-disable */

export function addLevelToData(data: TableDataNested[], level = 0) {
  return data.map((item, index, array) => {
    const newItem = { ...item, level };
    if (item.child?.length === 0 && level === 0) {
      return { ...item, level, nested: Nested.PARENTNOCHILD };
    }
    if (level === 0 && newItem.child && newItem.child.length > 0) {
      newItem.nested = Nested.PARENTWITHCHILD;
      newItem.child = addLevelToData(newItem.child, level + 1);
    }
    if (level > 0 && newItem.child?.length === 0 && index < array.length - 1) {
      newItem.nested = Nested.NOTFINALCHILD;
    }
    if (level > 0 && newItem.child?.length === 0 && index === array.length - 1) {
      newItem.nested = Nested.FINALCHILD;
    }
    if (level > 0 && newItem.child && newItem.child.length > 0) {
      newItem.nested = Nested.CHILDPARENT;
      newItem.child = addLevelToData(newItem.child, level + 1);
    }
    return newItem;
  });
}

/* eslint-enable */
