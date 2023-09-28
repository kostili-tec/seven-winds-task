import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import AppsIcon from '@mui/icons-material/Apps';
import ReplyIcon from '@mui/icons-material/Reply';
import { useState } from 'react';

export default function Header() {
  const [value, setValue] = useState(0);

  // eslint-disable-next-line
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box paddingX='20px'>
      <Stack direction='row' alignItems='center' gap='20px'>
        <AppsIcon fontSize='medium' color='secondary' />
        <ReplyIcon fontSize='medium' color='secondary' />
        <Tabs value={value} onChange={handleChange}>
          <Tab label='Просмотр' />
          <Tab label='Управление' />
        </Tabs>
      </Stack>
    </Box>
  );
}
