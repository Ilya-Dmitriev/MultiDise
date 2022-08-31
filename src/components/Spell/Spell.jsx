import React from 'react';

import clsx from 'clsx';
import classes from './Spell.module.scss';

export const Spell = ({ spell, className }) => {
  const spellClasses = clsx(className, classes.spell_wrap);

  return (
    <div className={spellClasses}>
      <div className={classes.spell_name}>
        <strong>{`${spell.name}`}</strong>
      </div>
      <div className={classes.level_wrap}>
        <div className={classes.spell_level}>
          {`${spell.level[0]}`}
        </div>
      </div>
      <div className={classes.spell_school}>
        <i>{`${spell.school}`}</i>
      </div>
    </div>
  );
};

