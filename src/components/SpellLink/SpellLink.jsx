import React from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import classes from './SpellLink.module.scss';

export const SpellLink = ({ spell, className, to }) => {
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

