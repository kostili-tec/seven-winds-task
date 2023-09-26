import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';

const StyledInput = styled(InputBase)({
  '& .MuiInputBase-input': {
    borderRadius: 6,
    position: 'relative',
    border: '1px solid',
    borderColor: '#414144',
    fontSize: 14,
    width: '95%',
    padding: '4px 10px',
    transition: `ease-in 0.2s`,
    '&:focus': {
      borderColor: '#A1A1AA',
    },
  },
});

interface TableItemCellProps {
  text: string | number;
  isEdit: boolean;
}

export default function TableItemCell({ text, isEdit }: TableItemCellProps) {
  return (
    <>
      {isEdit ? (
        <StyledInput fullWidth placeholder={`${text}`} />
      ) : (
        <Typography color='primary' variant='body2'>
          {text}
        </Typography>
      )}
    </>
  );
}
