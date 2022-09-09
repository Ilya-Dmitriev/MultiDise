import { useParams } from 'react-router-dom';
import { SpellInterface } from 'types/types';

import spells from '../../mock/spells.json';

import clsx from 'clsx';
import classes from './SpellWindow.module.scss';

const nullSpell: SpellInterface = {
  classes: ['---',
  ],
  level: 'X',
  name: 'Spell not found',
  school: '---',
  text: '---',
};

interface SpellWindowProps {
  className: string
}

export const SpellWindow: React.FC<SpellWindowProps> = ({ className }) => {
  const { name } = useParams();
  const spell: SpellInterface = spells.find((someSpell: SpellInterface) => {
    return someSpell.name === name!.replaceAll(/-/gu, ' ');
  }) || nullSpell;

  const windowClasses: string = clsx(className, classes.spell_window);

  const classesNames: string = spell.classes.join(' ');

  return (
    <div className={windowClasses}>
      <div className={classes.header}>
        <div className={classes.level}>
          <div className={classes.centerer_level}>
            {spell.level[0]}
          </div>
        </div>
        <div className={classes.name}>
          <b>{spell.name}</b>
        </div>
        <div className={classes.school}>
          {spell.school}
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.classes}>
          <b>Classes:</b>
          {classesNames}
        </div>
        <div className={classes.text}>
          <p>{spell.text}</p>
        </div>
      </div>
    </div>
  );
};
