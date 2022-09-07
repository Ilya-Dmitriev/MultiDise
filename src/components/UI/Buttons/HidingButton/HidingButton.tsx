import { MouseEventHandler } from 'react';

import clsx from 'clsx';
import classes from './HidingButton.module.scss';

interface HidingButtonProps {
  visible: boolean,
  children?: React.ReactNode,
  className?: string,
  variant?: 'line' | 'collapse',
  onClick?: MouseEventHandler<HTMLButtonElement>,
}

export const HidingButton: React.FC<HidingButtonProps> = ({
  visible,
  children,
  className,
  variant = 'line',
  onClick,
}) => {
  const hidingButtonClasses: string = clsx(
    className,
    classes.hiding_btn,
    classes[variant],
    !visible && classes.unvisible,
  );
  return (
    <button
      className={hidingButtonClasses}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
