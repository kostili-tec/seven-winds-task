import Grid from '@mui/material/Grid';

import TableItemIcons from '../../TableItemIcons/TableItemIcons';
import TableItemCell from '../TableItemCell/TableItemCell';
import { ModifiedTableData } from '../../../../app/types/types';

interface TableItemProps {
  tableData: ModifiedTableData;
  isEditState: boolean;
  // isShowEditRow: boolean;
  handleDoubleClick: (event: React.MouseEvent) => void;
  handleContainerKeyPress: (event: React.KeyboardEvent) => Promise<void>;
  updateData?: (fieldName: string, newValue: number | string) => void;
}

export default function TableItemRow({
  tableData,
  isEditState,
  handleDoubleClick,
  handleContainerKeyPress,
  updateData,
}: TableItemProps) {
  const { equipmentCosts, overheads, estimatedProfit, rowName, salary, level, nested } = tableData;
  const defaultPadding = 13;
  const currentPadding = level ? defaultPadding * level : defaultPadding;
  return (
    <Grid
      container
      spacing={0}
      height='60px'
      justifyContent='space-between'
      alignItems='center'
      paddingLeft='4px'
      borderTop='1px solid'
      marginX='10px'
      onClick={handleDoubleClick}
    >
      <Grid item xs={1} paddingLeft={`${currentPadding}px`}>
        <TableItemIcons nested={nested} isEdit={isEditState} />
      </Grid>
      <Grid item xs={5}>
        <TableItemCell
          text={rowName}
          isEdit={isEditState}
          updateData={updateData}
          name='rowName'
          type='text'
          onPressEnter={handleContainerKeyPress}
        />
      </Grid>
      <Grid item xs={1.5}>
        <TableItemCell
          text={salary}
          isEdit={isEditState}
          updateData={updateData}
          name='salary'
          type='number'
          onPressEnter={handleContainerKeyPress}
        />
      </Grid>
      <Grid item xs={1.5}>
        <TableItemCell
          text={equipmentCosts}
          isEdit={isEditState}
          updateData={updateData}
          name='equipmentCosts'
          type='number'
          onPressEnter={handleContainerKeyPress}
        />
      </Grid>
      <Grid item xs={1.5}>
        <TableItemCell
          text={overheads}
          isEdit={isEditState}
          updateData={updateData}
          name='overheads'
          type='number'
          onPressEnter={handleContainerKeyPress}
        />
      </Grid>
      <Grid item xs={1.5}>
        <TableItemCell
          text={estimatedProfit}
          isEdit={isEditState}
          updateData={updateData}
          name='estimatedProfit'
          type='number'
          onPressEnter={handleContainerKeyPress}
        />
      </Grid>
    </Grid>
  );
}
