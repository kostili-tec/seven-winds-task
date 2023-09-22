import Box from '@mui/material/Box';

import TableTab from './TableTab/TableTab';
import TableHeader from './TableHeader/TableHeader';

export default function Table() {
  return (
    <Box display='flex' flexDirection='column' width='100%'>
      <TableTab />
      <TableHeader />
    </Box>
  );
}
