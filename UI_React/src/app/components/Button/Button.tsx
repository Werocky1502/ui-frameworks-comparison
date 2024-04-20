import './Button.css';

export interface IButtonProps {
    variant?: 'dark' | 'light';
    disabled?: boolean;
    text?: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
}

export const Button: React.FC<IButtonProps> = ({
    text,
    onClick,
    variant = 'light',
    disabled = false,
    type = 'button'
}) => {
    const variantClassNames = variant === 'dark' ? 'button--dark' : 'button--light';
    const buttonClassNames = `button ${variantClassNames}`;

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={buttonClassNames}
            type={type}
        >
            {text}
        </button>
    );
};
