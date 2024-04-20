import { PropsWithChildren } from 'react';

import './Area.css';

export interface IAreaProps {
    headerContent?: React.ReactNode;
}

export const Area: React.FC<PropsWithChildren<IAreaProps>> = ({ children, headerContent }) => {
    const hasHeaderContent = !!headerContent;

    return (
        <div className='area'>
            {
                hasHeaderContent && (
                    <div className='area__header'>
                        {headerContent}
                    </div>
                )
            }
            <div className='area__content'>
                {children}
            </div>
        </div>
    );
};
