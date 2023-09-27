import React, { useState } from 'react';

import { useTableData } from '../../../../hooks/useTableData';
import { ModifiedTableData } from '../../../../app/types/types';
import TableItemRow from '../TableItemRow/TableItemRow';

export default function TableItemMain(props: ModifiedTableData) {
  const [isEdit, setIsEdit] = useState(false);
  // const [isShowEdit, setIsShowEdit] = useState(false);
  const { tableData, updateData, sendData } = useTableData({ ...props });

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
  return (
    <TableItemRow
      handleContainerKeyPress={handleContainerKeyPress}
      handleDoubleClick={handleDoubleClick}
      tableData={tableData}
      isEditState={isEdit}
      updateData={updateData}
    />
  );
}
