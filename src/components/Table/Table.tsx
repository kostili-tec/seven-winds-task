import Box from '@mui/material/Box';

import TableTab from './TableTab/TableTab';
import TableHeader from './TableHeader/TableHeader';
import TableTree from './TableTree/TableTree';

import { TableDataNested } from './Table.types';
import { addLevelToData } from '../../utils/addLevelToData';
import { useGetDataQuery } from '../../app/redux/api/api';

export default function Table() {
  const { data } = useGetDataQuery(null);
  console.log(data);
  const data1: TableDataNested[] = [
    {
      rowName: 'Элемент 1',
      equipmentCosts: 100,
      overheads: 50,
      estimatedProfit: 30,
      salary: 40,
      id: 1,
      child: [
        {
          rowName: 'Подэлемент 1',
          equipmentCosts: 20,
          overheads: 10,
          estimatedProfit: 5,
          salary: 15,
          id: 2,
          child: [],
        },
        {
          rowName: 'Подэлемент 2',
          equipmentCosts: 25,
          overheads: 15,
          estimatedProfit: 10,
          salary: 20,
          id: 3,
          child: [
            {
              rowName: 'Вложенный элемент 1',
              equipmentCosts: 10,
              overheads: 5,
              estimatedProfit: 3,
              salary: 7,
              id: 4,
              child: [],
            },
            {
              rowName: 'Вложенный элемент 2',
              equipmentCosts: 10,
              overheads: 5,
              estimatedProfit: 3,
              salary: 7,
              id: 132432,
              child: [],
            },
          ],
        },
      ],
    },
    {
      rowName: 'Элемент 2',
      equipmentCosts: 80,
      overheads: 40,
      estimatedProfit: 25,
      salary: 35,
      id: 5,
      child: [],
    },
  ];
  const newData = addLevelToData(data1);
  return (
    <Box display='flex' flexDirection='column' width='100%'>
      <TableTab />
      <TableHeader />
      <TableTree data={newData} />
    </Box>
  );
}
