import { IFinanceRecord } from '../../api';

import DeleteSvgIcon from '../../../assets/delete.svg?react';

import './FinanceRecord.css';

export interface IFinanceRecordProps {
    record: IFinanceRecord;
    onDelete: (recordId: string) => void;
}

export const FinanceRecord: React.FC<IFinanceRecordProps> = ({ record, onDelete, toggleFavorite, isFavorite = false }) => {
    const deleteHandler = () => onDelete(record.id);

    const recordColorClassName = record.amount > 0 ? 'finance-record--positive' : 'finance-record--negative';
    const recordClassNames = `finance-record ${recordColorClassName}`;

    return (
        <div className={recordClassNames}>
            <div className='finance-record__date'>
                {record.date.toLocaleDateString()}
            </div>
            <div className='finance-record__description'>
                {record.description}
            </div>
            <div className='finance-record__row-end'>
                <div className='finance-record__amount'>
                    {record.amount}$
                </div>
                <span className='finance-record__row-end-divider' />
                <div className='finance-record__delete-button' onClick={deleteHandler}>
                    <DeleteSvgIcon/>
                </div>
            </div>
        </div>
    );
};
