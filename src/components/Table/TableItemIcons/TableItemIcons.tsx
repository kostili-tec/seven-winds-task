import { useState, useEffect } from 'react';
import styled from '@mui/system/styled';

import DeleteIcon from '../../Icons/DeleteIcon';
import FieldIcon from '../../Icons/FieldIcon';
import classes from './TableItemIcons.module.scss';
import { Nested } from '../../../app/types/types';

const IconContainer = styled('div')({
  borderRadius: 6,
  padding: '3px 5px 3px 3px',
  maxWidth: 55,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

const StyledDeleteIcon = styled(DeleteIcon)({
  display: 'none',
});

interface TableItemIconsProps {
  isEdit: boolean;
  nested: Nested | undefined;
  handleFieldIconClick?: () => void;
}

export default function TableItemIcons({
  isEdit,
  nested,
  handleFieldIconClick,
}: TableItemIconsProps) {
  const containerClasses = isEdit ? '' : `${classes.iconsContainer}`;
  const fieldIconClasses = isEdit ? '' : `${classes.fieldIcon}`;
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
    <IconContainer className={containerClasses}>
      <FieldIcon
        handleFieldIconClick={handleFieldIconClick}
        className={`${currentClasses.join(' ')} ${fieldIconClasses}`}
      />
      <StyledDeleteIcon className={classes.deleteIcon} />
    </IconContainer>
  );
}
