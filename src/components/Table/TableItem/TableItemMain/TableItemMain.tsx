import React, { useState } from 'react';

import { useTableData } from '@/hooks/useTableData';
import { ModifiedTableData } from '@/app/types/types';
import TableItemRow from '../TableItemRow/TableItemRow';

export default function TableItemMain(props: ModifiedTableData) {
  const [isEdit, setIsEdit] = useState(false);
  const [isShowCreateRow, setIsShowCreateRow] = useState(false);
  const {
    tableData,
    newRowData,
    updateStateData,
    updateStateNewRowData,
    updateData,
    postData,
    deleteData,
  } = useTableData({
    ...props,
  });

  const handleDoubleClick = (event: React.MouseEvent) => {
    if (event.detail === 2) {
      if (isEdit) {
        setIsEdit(false);
      } else setIsEdit(true);
    }
  };

  const handleContainerKeyPress = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      await updateData();
      setIsEdit(false);
    }
    if (event.key === 'Escape') {
      setIsEdit(false);
    }
  };

  const handleKeyPressCreate = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const parendId = tableData.id;
      await postData(parendId);
      setIsShowCreateRow(false);
    }
    if (event.key === 'Escape') {
      setIsShowCreateRow(false);
    }
  };

  const handleShowCreateRow = () => {
    if (!isEdit) isShowCreateRow ? setIsShowCreateRow(false) : setIsShowCreateRow(true);
  };

  const handleDeleteRow = async () => {
    const { id } = tableData;
    await deleteData(id);
  };
  return (
    <>
      <TableItemRow
        handleContainerKeyPress={handleContainerKeyPress}
        handleDoubleClick={handleDoubleClick}
        tableData={tableData}
        isEditState={isEdit}
        updateData={updateStateData}
        handleFieldIconClick={handleShowCreateRow}
        // eslint-disable-next-line
        handleDeleteIconClick={handleDeleteRow}
      />
      {isShowCreateRow && !isEdit && (
        <TableItemRow
          handleContainerKeyPress={handleKeyPressCreate}
          isEditState={true}
          tableData={newRowData}
          updateData={updateStateNewRowData}
        />
      )}
    </>
  );
}
