import { useState } from 'react';
import List from '@mui/material/List';
import NavbarItem from '../NavbarItem/NavbarItem';
import { Box } from '@mui/system';

export default function NavbarItems() {
  const [listItems, setListItems] = useState<Array<string>>(['По проекту', 'Объекты', 'РД', 'МТО', 'СМР']);    // eslint-disable-line

  console.log(listItems);
  return (
    <Box maxWidth='240px' border='1px solid' borderColor='#414144' borderTop='none'>
      <List dense={true} disablePadding>
        {listItems && listItems.map((item) => <NavbarItem text={item} key={item} />)}
      </List>
    </Box>
  );
}
