import { ModifiedTableData } from '../../../../app/types/types';

export function createEmptyData(): ModifiedTableData {
  return {
    equipmentCosts: 0,
    estimatedProfit: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    mimExploitation: 0,
    overheads: 0,
    rowName: '',
    salary: 0,
    supportCosts: 0,
    child: [],
    id: 0,
    total: 0,
    materials: 0,
  };
}
