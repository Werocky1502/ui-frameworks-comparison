import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { routesPaths } from '../routes';
import Area from '../../components/Area';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { IFinanceRecord } from '../../api';
import { FinanceDataContext } from '../../contexts';

import './AddRecordPage.css';

export const AddRecordPage: React.FC = () => {
    const [description, setDescription] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);

    const { addFinanceRecord } = useContext(FinanceDataContext);
    const navigate = useNavigate();

    const onAmountChange = (value: string) => {
        const numValue = parseInt(value);
        if (numValue) {
            setAmount(numValue);
        }
    };

    const onSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        const newFinanceRecord: IFinanceRecord = {
            id: crypto.randomUUID(),
            date: new Date(date),
            amount,
            description,
        };

        await addFinanceRecord(newFinanceRecord);
        navigate(routesPaths.main);
    };

    const headerContent = (
        <div className='add-record-page__header'>
            <div className='add-record-page__header-text-container'>
                Add new finance record
            </div>
        </div>
    );

    return (
        <div className='add-record-page'>
            <Area
                headerContent={headerContent}
            >
                <form className='add-record-page__form' onSubmit={onSubmitHandler}>
                    <TextInput
                        initialValue={description}
                        label='Description'
                        placeholder='Enter description of your record'
                        onValueChange={setDescription}
                    />
                    <TextInput
                        initialValue={amount.toString()}
                        label='Amount'
                        placeholder='Enter amount of money'
                        onValueChange={onAmountChange}
                        type='number'
                    />
                    <TextInput
                        label='Date'
                        initialValue={date}
                        placeholder='Enter date of your record'
                        onValueChange={setDate}
                        type='date'
                    />
                    <div className='add-record-page__submit-button'>
                        <Button
                            variant='dark'
                            text='Add new record'
                            type='submit'
                        />
                    </div>
                </form>
            </Area>
        </div>
    );
};
