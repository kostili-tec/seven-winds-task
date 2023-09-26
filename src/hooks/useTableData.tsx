import { useState } from 'react';
import { ModifiedTableData } from '../app/types/types';
import { useUpdateDataMutation } from '../app/redux/api/api';

export function useTableData(initialData: ModifiedTableData) {
  const [tableData, setTableData] = useState<ModifiedTableData>(initialData);
  const [updateDataMutation, { isSuccess }] = useUpdateDataMutation();

  const updateData = (fieldName: string, newValue: number | string) => {
    const updatedTableData = { ...tableData, [fieldName]: newValue };
    setTableData(updatedTableData);
    console.log(tableData);
  };

  const sendData = async () => {
    // eslint-disable-next-line
    const { id, total, child, level, nested, ...resultObject } = tableData;
    console.log('resultObject', resultObject);
    await updateDataMutation({ itemID: id, data: resultObject });
    console.log(isSuccess);
  };

  return {
    tableData,
    updateData,
    sendData,
  };
}
