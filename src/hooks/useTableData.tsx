import { useState } from 'react';

import { ModifiedTableData, ApiCreateRequest } from '../app/types/types';
import { useUpdateDataMutation, useCreateDataMutation } from '../app/redux/api/api';
import { useAppDispatch } from '../app/redux/store/store';
import { addChildById } from '../app/redux/store/table.slice';
import { createEmptyData } from '../components/Table/TableItem/TableItemMain/TableItemMain.service';

export function useTableData(initialData: ModifiedTableData) {
  const [tableData, setTableData] = useState<ModifiedTableData>(initialData);
  const [newRowData, setNewRowData] = useState<ModifiedTableData>(createEmptyData());
  const [updateDataMutation] = useUpdateDataMutation();
  const [createDataMutation, { isError }] = useCreateDataMutation();
  const dispath = useAppDispatch();

  const updateStateData = (fieldName: string, newValue: number | string | ModifiedTableData) => {
    const updatedTableData = { ...tableData, [fieldName]: newValue };
    setTableData(updatedTableData);
    console.log(tableData);
  };

  const updateStateNewRowData = (fieldName: string, newValue: number | string) => {
    const data = { ...newRowData, [fieldName]: newValue };
    setNewRowData(data);
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

  return {
    tableData,
    newRowData,
    updateStateData,
    updateData,
    updateStateNewRowData,
    postData,
  };
}
