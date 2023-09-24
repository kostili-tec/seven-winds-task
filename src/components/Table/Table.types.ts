export interface TableData {
  rowName: string;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  salary: number;
  id: number;
  child: TableData[] | null;
}

export interface TableDataNested extends TableData {
  level?: number;
  nested?: Nested;
}

export type ArrayTableData = TableData[];

export enum Nested {
  PARENTWITHCHILD = 'parentWithChild',
  PARENTNOCHILD = 'parantNoChild',
  CHILDPARENT = 'childParent',
  FINALCHILD = 'finalChild',
  NOTFINALCHILD = 'notFinalChild',
}
