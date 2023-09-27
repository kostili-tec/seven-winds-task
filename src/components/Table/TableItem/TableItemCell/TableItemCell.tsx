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
    '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      MozAppearance: 'textfield',
      margin: 0,
    },
  },
});

interface TableItemCellProps {
  text: string | number;
  isEdit: boolean;
  name: string;
  type: 'text' | 'number';
  updateData?: (fieldName: string, newValue: number | string) => void;
  onPressEnter: (event: React.KeyboardEvent) => Promise<void>;
}

export default function TableItemCell({
  text,
  isEdit,
  name,
  updateData,
  type,
  onPressEnter,
}: TableItemCellProps) {
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (updateData) {
      if (type === 'number') {
        updateData(name, Number(newValue));
      } else updateData(name, newValue);
    }
  };
  return (
    <>
      {isEdit ? (
        <StyledInput
          fullWidth
          placeholder={`${text}`}
          value={text}
          onChange={handleChangeInput}
          name={name}
          type={type}
          // eslint-disable-next-line
          onKeyDown={async (event) => await onPressEnter(event)} // FIX ERROR
        />
      ) : (
        <Typography color='primary' variant='body2'>
          {text}
        </Typography>
      )}
    </>
  );
}
