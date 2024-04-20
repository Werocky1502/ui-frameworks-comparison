import { useContext } from 'react';

import Area from '../../components/Area';
import Button from '../../components/Button';
import FinanceRecord from '../../components/FinanceRecord';
import { FinanceDataContext } from '../../contexts';
import { RandomFinanceRecordService } from '../../services';

import { dateSortingMethod } from './helpers';

import './MainPage.css';

export const MainPage: React.FC = () => {
    const { totalBalance, financeRecords, addFinanceRecord, removeFinanceRecord } = useContext(FinanceDataContext);

    const addRecord = () => {
        const randomRecord = RandomFinanceRecordService.generateRandomFinanceRecord();
        addFinanceRecord(randomRecord);
    };

    const headerContent = (
        <div className='main-page__header'>
            <div className='main-page__header-text-container'>
                Total balance is: {totalBalance}$
            </div>
            <Button
                variant='dark'
                text='Add random record'
                onClick={addRecord}
            />
        </div>
    );

    const financeRecordsComponents = financeRecords
        .sort(dateSortingMethod)
        .map((record) => {
            return (
                <FinanceRecord
                    key={record.id}
                    record={record}
                    onDelete={removeFinanceRecord}
                />
            );
        });

    return (
        <div className='main-page'>
            <Area
                headerContent={headerContent}
            >
                {financeRecordsComponents}
            </Area>
        </div>
    );
};
