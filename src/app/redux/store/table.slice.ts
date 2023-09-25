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
  },
});

export const { saveData } = tableSlice.actions;

export default tableSlice.reducer;
