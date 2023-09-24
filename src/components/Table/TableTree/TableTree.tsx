import { ArrayTableData } from '../Table.types';
import TableItem from '../TableItem/TableItem';

interface TalbeItemsProps {
  data: ArrayTableData;
  level?: number;
}

export default function TableTree({ data, level = 1 }: TalbeItemsProps) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <TableItem {...item} level={level} />
          {item.child && <TableTree data={item.child} level={level + 1} />}
        </div>
      ))}
    </div>
  );
}
