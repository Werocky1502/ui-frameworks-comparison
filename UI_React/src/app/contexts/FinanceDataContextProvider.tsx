import { PropsWithChildren, useState, useEffect } from 'react';

import { IFinanceRecord, getFinanceRecords, postFinanceRecord, deleteFinanceRecord } from '../api';

import { FinanceDataContext, initialFinanceData } from './FinanceDataContext';

export const FinanceDataContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [totalBalance, setTotalBalance] = useState(initialFinanceData.totalBalance);
    const [financeRecords, setRecords] = useState(initialFinanceData.financeRecords);

    const fetchFinanceRecords = async () => {
        const records = await getFinanceRecords();
        setRecords(records);

        const recordsSum = records.reduce((sum, record) => sum + record.amount, 0);
        setTotalBalance(recordsSum);
    };

    useEffect(() => {
        fetchFinanceRecords();
    }, []);

    const addFinanceRecord = async (record: IFinanceRecord) => {
        await postFinanceRecord(record);
        setRecords([...financeRecords, record]);
        setTotalBalance(totalBalance + record.amount);
    };

    const removeFinanceRecord = async (recordId: string) => {
        const record = financeRecords.find((record) => record.id === recordId);

        if (record) {
            await deleteFinanceRecord(record.id);
            setRecords(financeRecords.filter((record) => record.id !== recordId));
            setTotalBalance(totalBalance - record.amount);
        }
    };

    const financeContextData = {
        reloadFinanceRecords: fetchFinanceRecords,
        addFinanceRecord,
        removeFinanceRecord,
        totalBalance,
        financeRecords,
    };

    return (
        <FinanceDataContext.Provider value={financeContextData}>
            {children}
        </FinanceDataContext.Provider>
    );
};
