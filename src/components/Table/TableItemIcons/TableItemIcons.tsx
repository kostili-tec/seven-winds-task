import styled from '@mui/system/styled';
import DeleteIcon from '../../Icons/DeleteIcon';
import FieldIcon from '../../Icons/FieldIcon';

const IconContainer = styled('div')({
  borderRadius: 6,
  padding: '3px 5px 3px 3px',
  maxWidth: 55,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  '&:hover': {
    backgroundColor: '#414144',
  },
  '&:hover .delete-icon': {
    display: 'block',
    cursor: 'pointer',
  },
});

const StyledDeleteIcon = styled(DeleteIcon)({
  display: 'none',
});

interface TableItemIconsProps {
  className: string;
}

export default function TableItemIcons({ className }: TableItemIconsProps) {
  return (
    <IconContainer>
      <FieldIcon className={className} />
      <StyledDeleteIcon className='delete-icon' />
    </IconContainer>
  );
}
