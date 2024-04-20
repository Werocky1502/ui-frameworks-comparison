import './Footer.css';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='page-footer'>
            This is a sample application. Don't expect much. It is {currentYear} now.
        </div>
    );
};
