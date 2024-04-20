import { createContext } from 'react';

import { IFinanceRecord } from '../api';

export interface IFinanceContextData {
    reloadFinanceRecords: () => Promise<void>;
    addFinanceRecord: (record: IFinanceRecord) => Promise<void>;
    removeFinanceRecord: (recordId: string) => Promise<void>;
    totalBalance: number;
    financeRecords: IFinanceRecord[];
}

export const initialFinanceData: IFinanceContextData = {
    reloadFinanceRecords: async () => {},
    addFinanceRecord: async () => {},
    removeFinanceRecord: async () => {},
    totalBalance: 0,
    financeRecords: [],
}

export const FinanceDataContext = createContext<IFinanceContextData>(initialFinanceData);
