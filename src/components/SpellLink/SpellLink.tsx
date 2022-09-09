import { NavLink, To } from 'react-router-dom';

import clsx from 'clsx';
import classes from './SpellLink.module.scss';

interface SpellLinckProps {
  spell: { name: string, level: string, school: string },
  className: string,
  to: To,
}

export const SpellLink: React.FC<SpellLinckProps> = ({
  spell,
  className,
  to,
}) => {
  const spellClasses = (
    { isActive }: { isActive: boolean }
  ): string => {
    return clsx(
      className,
      classes.spell_wrap,
      isActive && classes.active,
    );
  }

  return (
    <NavLink className={spellClasses} to={to}>
      <div className={classes.spell_name}>
        <b>{spell.name}</b>
      </div>
      <div className={classes.level_wrap}>
        <div className={classes.spell_level}>
          {spell.level[0]}
        </div>
      </div>
      <div className={classes.spell_school}>
        <i>{spell.school}</i>
      </div>
    </NavLink>
  );
};

