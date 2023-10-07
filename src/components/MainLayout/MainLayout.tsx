import { Box } from '@mui/system';
import Navbar from '../Navbar/Navbar';
import Table from '../Table/Table';

export default function MainLayout() {
  return (
    <Box display='flex' flexDirection='row' justifyContent='flex-start'>
      <Navbar />
      <Table />
    </Box>
  );
}
