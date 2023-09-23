export interface TableData {
  rowName: string;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  salary: number;
  id: number;
  child: TableData[] | null;
}

export type ArrayTableData = TableData[];
