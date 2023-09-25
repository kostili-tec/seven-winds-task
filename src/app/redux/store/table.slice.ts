import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiRequest } from '../api/api.types';
import { Nested } from '../../../components/Table/Table.types';

interface ModifiedGetResponse extends ApiRequest {
  level?: number;
  nested?: Nested;
}

const initialState: ModifiedGetResponse[] = [];

const tableSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    saveData: (state, action: PayloadAction<ModifiedGetResponse[]>) => {
      return action.payload;
    },
  },
});

export const { saveData } = tableSlice.actions;

export default tableSlice.reducer;
