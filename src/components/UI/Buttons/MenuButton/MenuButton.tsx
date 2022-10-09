import { MouseEventHandler } from 'react';

import clsx from 'clsx';
import classes from './MenuButton.module.scss';

interface MenuButtonProps {
  active?: boolean,
  className?: string,
  children?: React.ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement>,
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  active = true,
  className,
  children,
  onClick,
}) => {
  const iconButtonClasses: string = clsx(
    className,
    classes.icon_btn,
    active && classes.active,
  )

  return (
    <button
      className={iconButtonClasses}
      onClick={onClick}
      type="button"
    >
      <span className={classes.top_s}></span>
      <span className={classes.mid_s}></span>
      <span className={classes.bot_s}></span>
    </button>
  )
}
