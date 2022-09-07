import classes from './TogleButton.module.scss';

const enum togleVariant {
  primary = 'primary',
  secondary = 'secondary',
}

interface TogleButtonProps {
  children?: React.ReactNode,
  variant?: togleVariant,
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
