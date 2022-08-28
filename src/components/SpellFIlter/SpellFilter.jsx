import React from 'react';

import clsx from 'clsx';
import classes from './SpellFilter.module.scss';

export const SpellFilter = ({ spellsFilter, setSpellsFilter }) => {
  const onFiltersChange = (event) => {
    if (!(event.currentTarget === event.target)) {
      setSpellsFilter({
        ...spellsFilter,
        [event.target.innerHTML]: !spellsFilter[event.target.innerHTML],
      });
    }
  };

  return (
    <div className={classes.filter_bar}>
      <strong className={classes.filter_name}>Level</strong>
      <div className={classes.filter_swich} onClick={onFiltersChange}>
        {Object.keys(spellsFilter)
          .sort((a, b) => {
            return a === 'Cantrip' ? -1 : b === 'Cantrip' ? 1 : 0;
          })
          .map((element) => {
            return (
              <span
                key={element}
                className={clsx(classes.filter_key, !spellsFilter[element] && classes.active)}
              >
                {element}
              </span>
            );
          })}
      </div>
    </div>
  );
};
