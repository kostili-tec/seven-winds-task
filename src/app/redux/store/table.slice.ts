import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiGetResponse } from '../api/api.types';

const initialState: ApiGetResponse[] = [];

const tableSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<ApiGetResponse[]>) => {
      return action.payload;
    },
  },
});

export const { setData } = tableSlice.actions;

export default tableSlice.reducer;
