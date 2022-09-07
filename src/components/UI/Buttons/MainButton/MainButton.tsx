import { MouseEventHandler } from 'react';

import clsx from 'clsx';
import classes from './MainButton.module.scss';

interface MainButtonProps {
  children?: React.ReactNode,
  className?: string,
  variant?: "primary" | "round",
  onClick?: MouseEventHandler<HTMLButtonElement>,
}

export const MainButton: React.FC<MainButtonProps> = ({
  variant = "primary",
  children,
  className,
  onClick,
}) => {
  const buttonClasses: string = clsx(
    className,
    classes.btn,
    classes[variant],
  );
  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      type="button"
    >
      {children}
    </button>
  );
};
