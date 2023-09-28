import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ModifiedTableData } from '../../types/types';

const initialState: ModifiedTableData[] = [];

const tableSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    saveData: (state, action: PayloadAction<ModifiedTableData[]>) => {
      return action.payload;
    },
    addChildById: (state, action: PayloadAction<{ id: number; child: ModifiedTableData }>) => {
      const { id, child } = action.payload;
      state.forEach((item) => addChildByIdRecursive(item, id, child));
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      removeItemByIdRecursive([...state], id);
    },
  },
});

const addChildByIdRecursive = (
  currentItem: ModifiedTableData,
  targetId: number,
  childToAdd: ModifiedTableData
) => {
  if (currentItem.id === targetId) {
    currentItem.child.push(childToAdd);
    return;
  }
  currentItem.child.forEach((childItem) => {
    addChildByIdRecursive(childItem, targetId, childToAdd);
  });
};

const removeItemByIdRecursive = (
  items: ModifiedTableData[],
  itemIdToRemove: number
): ModifiedTableData[] => {
  items.forEach((item, index) => {
    if (item.id === itemIdToRemove) {
      items.splice(index, 1);
    }
    if (item.child && item.child.length > 0) {
      removeItemByIdRecursive(item.child, itemIdToRemove);
    }
  });
  return items;
};

export const { saveData, addChildById, deleteItem } = tableSlice.actions;

export default tableSlice.reducer;
