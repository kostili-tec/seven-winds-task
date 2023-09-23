import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { TableData as TableItemProps } from '../Table.types';
import TableItemIcons from '../TableItemIcons/TableItemIcons';

export default function TableItem({
  equipmentCosts,
  overheads,
  estimatedProfit,
  rowName,
  salary,
}: TableItemProps) {
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
    >
      <Grid item xs={1} paddingLeft='12px'>
        <TableItemIcons />
      </Grid>
      <Grid item xs={5}>
        <Typography color='primary' variant='body2'>
          {rowName}
        </Typography>
      </Grid>
      <Grid item xs={1.5}>
        <Typography color='primary' variant='body2'>
          {salary}
        </Typography>
      </Grid>
      <Grid item xs={1.5}>
        <Typography color='primary' variant='body2'>
          {equipmentCosts}
        </Typography>
      </Grid>
      <Grid item xs={1.5}>
        <Typography color='primary' variant='body2'>
          {overheads}
        </Typography>
      </Grid>
      <Grid item xs={1.5}>
        <Typography color='primary' variant='body2'>
          {estimatedProfit}
        </Typography>
      </Grid>
    </Grid>
  );
}
