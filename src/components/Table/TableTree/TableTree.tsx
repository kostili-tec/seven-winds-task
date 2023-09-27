import { ModifiedTableData } from '../../../app/types/types';
import TableItemMain from '../TableItem/TableItemMain/TableItemMain';

interface TalbeItemsProps {
  data: ModifiedTableData[];
  level?: number;
}

export default function TableTree({ data, level = 1 }: TalbeItemsProps) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <TableItemMain {...item} level={level} />
          {item.child && <TableTree data={item.child} level={level + 1} />}
        </div>
      ))}
    </div>
  );
}
