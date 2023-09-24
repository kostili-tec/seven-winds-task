import SvgIcon from '@mui/material/SvgIcon';
import styled from '@mui/system/styled';

const FieldIconContainer = styled('div')({
  cursor: 'pointer',
  height: '24px',
});

interface FieldIconProps {
  className: string;
}

export default function FieldIcon({ className }: FieldIconProps) {
  return (
    <FieldIconContainer className={className}>
      <SvgIcon>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M15.5556 4H5.77778C4.8 4 4 4.8 4 5.77778V18.2222C4 19.2 4.8 20 5.77778 20H18.2222C19.2 20 20 19.2 20 18.2222V8.44444L15.5556 4ZM7.55556 7.55556H12V9.33333H7.55556V7.55556ZM16.4444 16.4444H7.55556V14.6667H16.4444V16.4444ZM16.4444 12.8889H7.55556V11.1111H16.4444V12.8889ZM14.6667 9.33333V5.77778L18.2222 9.33333H14.6667Z'
            fill='#7890B2'
          />
        </svg>
      </SvgIcon>
    </FieldIconContainer>
  );
}
