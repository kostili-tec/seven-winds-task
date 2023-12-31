import { useState } from 'react';

import { ModifiedTableData, ApiCreateRequest } from '../app/types/types';
import {
  useUpdateDataMutation,
  useCreateDataMutation,
  useDeleteItemMutation,
} from '../app/redux/api/api';
import { useAppDispatch } from '../app/redux/store/store';
import { addChildById, deleteItem } from '../app/redux/store/table.slice';
import { createEmptyData } from '../components/Table/TableItem/TableItemMain/TableItemMain.service';

export function useTableData(initialData: ModifiedTableData) {
  const [tableData, setTableData] = useState<ModifiedTableData>(initialData);
  const [newRowData, setNewRowData] = useState<ModifiedTableData>(createEmptyData());
  const [updateDataMutation] = useUpdateDataMutation();
  const [createDataMutation, { isError }] = useCreateDataMutation();
  const [deleteDataMutation] = useDeleteItemMutation();
  const dispath = useAppDispatch();

  const updateStateData = (fieldName: string, newValue: number | string | ModifiedTableData) => {
    setTableData((state) => ({ ...state, [fieldName]: newValue }));
  };

  const updateStateNewRowData = (fieldName: string, newValue: number | string) => {
    setNewRowData((state) => ({ ...state, [fieldName]: newValue }));
  };

  const updateStateDataChild = (newData: ModifiedTableData) => {
    const child = [...tableData.child, newData];
    setTableData((state) => ({ ...state, child }));
  };

  const updateData = async () => {
    // eslint-disable-next-line
    const { id, total, child, level, nested, ...resultObject } = tableData;
    await updateDataMutation({ itemID: id, data: resultObject });
  };

  const postData = async (parentID?: number) => {
    // eslint-disable-next-line
    const {id, total, child, level, nested, ...resultObject} = newRowData;
    const parentId = parentID ? parentID : null;
    const sendObject: ApiCreateRequest = {
      ...resultObject,
      parentId,
    };
    await createDataMutation(sendObject);
    if (!isError) {
      updateStateDataChild(newRowData);
      if (parentId) dispath(addChildById({ id: parentId, child: newRowData }));
    }
  };

  const deleteData = async (id: number) => {
    await deleteDataMutation(id);
    dispath(deleteItem(id));
  };

  return {
    tableData,
    newRowData,
    updateStateData,
    updateData,
    updateStateNewRowData,
    postData,
    deleteData,
  };
}
