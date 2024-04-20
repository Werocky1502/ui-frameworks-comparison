import ReactSvgIcon from '../../../assets/react.svg?react';
import MoneySvgIcon from '../../../assets/money.svg?react';

import './Header.css';

export const Header: React.FC = () => {
    return (
        <div className='page-header'>
            <MoneySvgIcon className='page-header__icon'/>
            <h1>Finance App. React_UI</h1>
            <ReactSvgIcon  className='page-header__icon'/>
        </div>
    );
};
