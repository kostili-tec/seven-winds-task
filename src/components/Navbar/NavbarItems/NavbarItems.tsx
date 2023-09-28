import List from '@mui/material/List';
import NavbarItem from '../NavbarItem/NavbarItem';
import { Box } from '@mui/system';

export default function NavbarItems() {
  const listNames = ['По проекту', 'Объекты', 'РД', 'МТО', 'СМР'];

  return (
    <Box maxWidth='240px' border='1px solid' borderColor='#414144' borderTop='none'>
      <List dense={true} disablePadding>
        {listNames.map((item) => (
          <NavbarItem text={item} key={item} />
        ))}
      </List>
    </Box>
  );
}
