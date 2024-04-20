export const financeApiHost = 'https://localhost:8080';
export const financeRecordsRoute = '/finance/records';

export interface IFinanceRecord {
    id: string;
    date: Date;
    amount: number;
    description: string;
}

export const getFinanceRecords = async (): Promise<IFinanceRecord[]> => {
  const response = await fetch(`${financeApiHost}${financeRecordsRoute}`);
  const records: IFinanceRecord[] = await response.json();

  const transformedRecords: IFinanceRecord[] = records.map((record: IFinanceRecord) => ({
    ...record,
    date: new Date(record.date),
  }));

  return transformedRecords;
};

export const postFinanceRecord = async (record: IFinanceRecord): Promise<void> => {
    await fetch(`${financeApiHost}${financeRecordsRoute}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(record),
    });
};

export const deleteFinanceRecord = async (recordId: string): Promise<void> => {
    await fetch(`${financeApiHost}${financeRecordsRoute}/${recordId}`, {
        method: 'DELETE',
    });
};
