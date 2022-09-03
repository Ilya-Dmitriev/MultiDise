import React from 'react';
import { useParams } from 'react-router-dom';

import spells from '../../mock/spells.json';

import clsx from 'clsx';
import classes from './SpellWindow.module.scss';

const nullSpell = {
  classes: ['---',
  ],
  level: '-',
  name: 'Spell not found',
  school: '---',
  text: '---',
};

export const SpellWindow = ({ className }) => {
  const { name } = useParams();
  const spell = spells.find((someSpell) => {
    return someSpell.name === name.replaceAll(/-/gu, ' ');
  }) || nullSpell;

  const windowClasses = clsx(className, classes.spell_window);
  return (
    <div className={windowClasses}>
      <div className={classes.header}>
        <div className={classes.level}>
          <div className={classes.centerer_level}>
            {spell.level[0]}
          </div>
        </div>
        <div className={classes.name}>
          {spell.name}
        </div>
        <div className={classes.school}>
          {spell.school}
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.classes}>
          <b>Classes:</b>
          {spell.classes.map((spellClass) => {
            return <div key={spellClass} className={classes.spell_class}>{spellClass}</div>;
          })}
        </div>
        <div className={classes.text}>
          <p>{spell.text}</p>
          <p>{spell.text}</p>
          <p>{spell.text}</p>
          <p>{spell.text}</p>
          <p>{spell.text}</p>
          <p>{spell.text}</p>
          <p>{spell.text}</p>
          <p>{spell.text}</p>
          <p>{spell.text}</p>
          <p>{spell.text}</p>
        </div>
      </div>
    </div>
  );
};
