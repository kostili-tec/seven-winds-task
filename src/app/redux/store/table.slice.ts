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

export const { saveData, addChildById } = tableSlice.actions;

export default tableSlice.reducer;
