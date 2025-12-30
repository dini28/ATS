import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    // Combine base class with dynamic variant and size classes
    const buttonClasses = `btn btn-${variant} btn-${size} ${className}`.trim();

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;