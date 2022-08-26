import React from 'react';

import classes from './Spell.module.scss';

export const Spell = ({ spell }) => {
  return (
    <div className={classes.spell_wrap}>
      <div className={classes.spell_name}>
        <strong>Name:</strong> {`${spell.name}`}
      </div>
      <div className={classes.spell_level}>
        <strong>Level:</strong> {`${spell.level}`}
      </div>
      <div className={classes.spell_school}>
        <strong>School:</strong> {`${spell.school}`}
      </div>
    </div>
  );
};

