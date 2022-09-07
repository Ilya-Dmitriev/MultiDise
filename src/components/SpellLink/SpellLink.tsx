import { Link, To } from 'react-router-dom';

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
  const spellClasses = clsx(className, classes.spell_wrap);

  return (
    <Link className={spellClasses} to={to}>
      <div className={classes.spell_name}>
        {spell.name}
      </div>
      <div className={classes.level_wrap}>
        <div className={classes.spell_level}>
          {spell.level[0]}
        </div>
      </div>
      <div className={classes.spell_school}>
        <i>{spell.school}</i>
      </div>
    </Link>
  );
};

