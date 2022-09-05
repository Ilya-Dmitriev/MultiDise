import classes from './TogleButton.module.scss';

interface TogleButtonProps {
  variant?: string,
}

export const TogleButton: React.FC<TogleButtonProps> =
  ({ variant = classes.primary, children, ...props }) => {
    return (
      <button
        className={variant}
        type="button"
        {...props}
      >
        {children}
      </button>
    );
  };
