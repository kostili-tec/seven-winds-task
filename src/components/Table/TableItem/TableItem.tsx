import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

import TableItemIcons from '../TableItemIcons/TableItemIcons';
import TableItemCell from './TableItemCell/TableItemCell';
import { ModifiedTableData, Nested } from '../../../app/types/types';
import classes from './TableItem.module.scss';

export default function TableItem({
  equipmentCosts,
  overheads,
  estimatedProfit,
  rowName,
  salary,
  level,
  nested,
}: ModifiedTableData) {
  const defaultPadding = 13;
  const currentPadding = level ? defaultPadding * level : defaultPadding;
  const [isEdit, setIsEdit] = useState(false);
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

  const handleDoubleClick = (event: React.MouseEvent) => {
    if (event.detail === 2) {
      isEdit === false ? setIsEdit(true) : setIsEdit(false);
      console.log('double');
      console.log(isEdit);
    }
  };
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
        <TableItemIcons className={currentClasses.join(' ')} />
      </Grid>
      <Grid item xs={5}>
        <TableItemCell text={rowName} isEdit={isEdit} />
      </Grid>
      <Grid item xs={1.5}>
        <TableItemCell text={salary} isEdit={isEdit} />
      </Grid>
      <Grid item xs={1.5}>
        <TableItemCell text={equipmentCosts} isEdit={isEdit} />
      </Grid>
      <Grid item xs={1.5}>
        <TableItemCell text={overheads} isEdit={isEdit} />
      </Grid>
      <Grid item xs={1.5}>
        <TableItemCell text={estimatedProfit} isEdit={isEdit} />
      </Grid>
    </Grid>
  );
}
