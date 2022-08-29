import React, { useMemo } from 'react';

import { HidingButton } from '../UI/Buttons/HidingButton/HidingButton';

import clsx from 'clsx';
import classes from './SpellFilter.module.scss';

export const SpellFilter = ({ className, filterName, spellsFilter, setSpellsFilter, resetFilter }) => {
  const filterClasses = clsx(classes.filter_bar, className);
  const onFiltersChange = (event) => {
    if (!(event.currentTarget === event.target)) {
      setSpellsFilter({
        ...spellsFilter,
        [event.target.innerHTML]: !spellsFilter[event.target.innerHTML],
      });
    }
  };

  const clearButtonState = useMemo(() => {
    let state = false;
    for (const key in spellsFilter) {
      if (Object.prototype.hasOwnProperty.call(spellsFilter, key)) {
        state = state || !spellsFilter[key];
      }
    }

    return state;
  }, [spellsFilter]);

  return (
    <div className={filterClasses}>
      <strong className={classes.filter_name}>{filterName}</strong>
      <HidingButton
        className={classes.clear_btn}
        visible={clearButtonState}
        onClick={() => {
          resetFilter(spellsFilter, setSpellsFilter);
        }}
      >Clear</HidingButton>
      <div className={classes.filter_swich} onClick={onFiltersChange}>
        {Object.keys(spellsFilter)
          .sort()
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
