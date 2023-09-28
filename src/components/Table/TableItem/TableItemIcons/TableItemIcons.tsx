import { useState, useEffect } from 'react';
import styled from '@mui/system/styled';

import { FieldIcon, DeleteIcon } from '@/components/Icons';
import { Nested } from '@/app/types/types';
import classes from './TableItemIcons.module.scss';

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
  handleDeleteIconClick?: () => Promise<void>;
}

export default function TableItemIcons({
  isEdit,
  nested,
  handleFieldIconClick,
  handleDeleteIconClick,
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
      <StyledDeleteIcon
        handleDeleteIconClick={handleDeleteIconClick}
        className={classes.deleteIcon}
      />
    </IconContainer>
  );
}
