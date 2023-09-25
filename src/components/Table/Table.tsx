import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';

import TableTab from './TableTab/TableTab';
import TableHeader from './TableHeader/TableHeader';
import TableTree from './TableTree/TableTree';

import { addLevelToData } from '../../utils/addLevelToData';
import { useGetDataQuery } from '../../app/redux/api/api';
import { useAppSelector } from '../../app/redux/store/store';
import { saveData } from '../../app/redux/store/table.slice';

export default function Table() {
  const dispatch = useDispatch();
  const { data } = useGetDataQuery(null);
  useEffect(() => {
    if (data) {
      const modifiedData = addLevelToData(data);
      dispatch(saveData(modifiedData));
    }
  }, [dispatch, data]);
  const tableData = useAppSelector((state) => state.table);
  return (
    <Box display='flex' flexDirection='column' width='100%'>
      <TableTab />
      <TableHeader />
      <TableTree data={tableData} />
    </Box>
  );
}
