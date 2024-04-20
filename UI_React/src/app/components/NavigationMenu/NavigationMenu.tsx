import { useLocation, useNavigate } from 'react-router-dom';

import Button from '../Button';

import { routesPaths } from '../../pages';

import './NavigationMenu.css';

export const NavigationMenu: React.FC = () => {
    const navigate = useNavigate();
    const { pathname: currentPath } = useLocation();

    return (
        <div className='navigation-menu'>
            <div className='navigation-menu__item'>
                <Button
                    text='Main page'
                    onClick={() => navigate(routesPaths.main)}
                    disabled={currentPath === routesPaths.main}
                />
            </div>
            <div className='navigation-menu__item'>
                <Button
                    text='Add new record'
                    onClick={() => navigate(routesPaths.addRecord)}
                    disabled={currentPath === routesPaths.addRecord}
                />
            </div>
        </div>
    );
};
