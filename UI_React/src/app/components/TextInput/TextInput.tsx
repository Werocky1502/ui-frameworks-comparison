import { useState } from 'react';

import './TextInput.css';

export interface ITextInputProps {
    initialValue?: string;
    label?: string;
    placeholder?: string;
    onValueChange?: (value: string) => void;
    type?: 'text' | 'number' | 'date';
}

export const TextInput: React.FC<ITextInputProps> = ({
    initialValue = '',
    label,
    placeholder,
    onValueChange,
    type = 'text'
}) => {
    const [value, setValue] = useState(initialValue);

    const onChangeInternal = ({ target: { value: newValue } }: React.ChangeEvent<HTMLInputElement>) => {
        setValue(newValue);
        onValueChange && onValueChange(newValue);
    };

    return (
        <div className='text-input'>
            <label className='text-input__label'>
                {label}
            </label>
            <input
                className='text-input__input'
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChangeInternal}
            />
        </div>
    );
};
