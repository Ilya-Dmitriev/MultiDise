import { NavLink, To } from 'react-router-dom';

import clsx from 'clsx';
import classes from './ClassLink.module.scss';

interface ClassLinckProps {
  dndClass: { name: string, hitDise: string, sourse: string },
  className: string,
  to: To,
}

export const ClassLink: React.FC<ClassLinckProps> = ({
  dndClass,
  className,
  to,
}) => {
  const dndClassClasses = (
    { isActive }: { isActive: boolean }
  ): string => {
    return clsx(
      className,
      classes.dnd_class_wrap,
      isActive && classes.active,
    );
  }

  return (
    <NavLink className={dndClassClasses} to={to}>
      <div className={classes.dnd_class_name}>
        <b>{dndClass.name}</b>
      </div>
      <div className={classes.dnd_class_sourse}>
        {dndClass.sourse}
      </div>
      <div className={classes.dnd_class_hitDise}>
        <i>{dndClass.hitDise}</i>
      </div>
    </NavLink>
  );
};

