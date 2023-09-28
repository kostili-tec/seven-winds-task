export interface ApiRequest {
  rowName: string;
  overheads: number;
  salary: number;
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary?: number;
  mainCosts?: number;
  materials?: number;
  mimExploitation?: number;
  supportCosts?: number;
}

export interface ApiCreateRequest extends ApiRequest {
  parentId: number | null;
}

export interface ApiResponse {
  current: {
    id: number;
    rowName: string;
    total: number;
    salary: number;
    mimExploitation: number;
    machineOperatorSalary: number;
    materials: number;
    mainCosts: number;
    supportCosts: number;
    equipmentCosts: number;
    overheads: number;
    estimatedProfit: number;
  };
  changed: [];
}

export interface ApiGetResponse extends ApiRequest {
  child: [] | ApiGetResponse[];
  total: number;
  id: number;
}

export interface ModifiedTableData extends ApiRequest {
  total: number;
  level?: number;
  nested?: Nested;
  child: ModifiedTableData[];
  id: number;
}

export enum Nested {
  PARENTWITHCHILD = 'parentWithChild',
  PARENTNOCHILD = 'parantNoChild',
  CHILDPARENT = 'childParent',
  FINALCHILD = 'finalChild',
  NOTFINALCHILD = 'notFinalChild',
}
