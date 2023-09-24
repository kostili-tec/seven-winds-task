import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Nested, TableData } from '../Table.types';
import TableItemIcons from '../TableItemIcons/TableItemIcons';
import classes from './TableItem.module.scss';
import { useState, useEffect } from 'react';

interface TableItemProps extends TableData {
  level: number;
  nested?: Nested;
}

export default function TableItem({
  equipmentCosts,
  overheads,
  estimatedProfit,
  rowName,
  salary,
  level,
  nested,
}: TableItemProps) {
  const defaultPadding = 13;
  const currentPadding = level * defaultPadding;
  const [currentClasses, setCurrentClasses] = useState<Array<string>>([]);
  const setState = (className: string) => setCurrentClasses((state) => [...state, className]);
  useEffect(() => {
    if (nested === Nested.PARENTWITHCHILD) {
      setState(classes.parentLine);
    }
    if (nested === Nested.CHILDPARENT) {
      setState(classes.nestedParent);
      setState(classes.leftLine);
    }
    if (nested === Nested.FINALCHILD) {
      setState(classes.leftLine);
    }
    if (nested === Nested.NOTFINALCHILD) {
      setState(classes.leftLine);
      setState(classes.notFinalChild);
    }
  }, [nested]);
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
      <Grid item xs={1} paddingLeft={`${currentPadding}px`}>
        <TableItemIcons className={currentClasses.join(' ')} />
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
