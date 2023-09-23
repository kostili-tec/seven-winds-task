import { ArrayTableData } from '../Table.types';
import TableItem from '../TableItem/TableItem';

interface TalbeItemsProps {
  data: ArrayTableData;
}

export default function TableTree({ data }: TalbeItemsProps) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <TableItem {...item} />
          {item.child && <TableTree data={item.child} />}
        </div>
      ))}
    </div>
  );
}
