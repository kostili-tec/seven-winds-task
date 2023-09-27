import React, { useState } from 'react';

import { useTableData } from '../../../../hooks/useTableData';
import { ModifiedTableData } from '../../../../app/types/types';
import TableItemRow from '../TableItemRow/TableItemRow';
import { createEmptyData } from './TableItemMain.service';

export default function TableItemMain(props: ModifiedTableData) {
  const [isEdit, setIsEdit] = useState(false);
  const [isShowCreateRow, setIsShowCreateRow] = useState(false);
  const { tableData, updateData, sendData } = useTableData({ ...props });

  const emptyData = createEmptyData();

  const handleDoubleClick = (event: React.MouseEvent) => {
    if (event.detail === 2) {
      if (isEdit) {
        setIsEdit(false);
      } else setIsEdit(true);
    }
  };

  const handleContainerKeyPress = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      await sendData();
      setIsEdit(false);
    }
    if (event.key === 'Escape') {
      setIsEdit(false);
    }
  };
  const handleKeyPressCreate = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      await sendData();
      setIsShowCreateRow(false);
    }
    if (event.key === 'Escape') {
      setIsShowCreateRow(false);
    }
  };

  const handleShowCreateRow = () => {
    if (!isEdit) isShowCreateRow ? setIsShowCreateRow(false) : setIsShowCreateRow(true);
  };
  return (
    <>
      <TableItemRow
        handleContainerKeyPress={handleContainerKeyPress}
        handleDoubleClick={handleDoubleClick}
        tableData={tableData}
        isEditState={isEdit}
        updateData={updateData}
        handleFieldIconClick={handleShowCreateRow}
      />
      {isShowCreateRow && !isEdit && (
        <TableItemRow
          handleContainerKeyPress={handleKeyPressCreate}
          isEditState={true}
          tableData={emptyData}
        />
      )}
    </>
  );
}
