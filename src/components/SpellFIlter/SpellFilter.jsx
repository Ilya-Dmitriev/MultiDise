import React, { useState } from 'react';

import { useListFilter } from '../../hooks/useListFilter';

import classes from './SpellFIlter.module.scss';

const oneToNineFilters = Object.fromEntries(
  Array.from({
    length: 9,
  }).map((value, index) => {
    return [index, true];
  }),
);

const SpellFilter = ({ spells, setSpells }) => {
  const [levelFilterQuery, setLevelFilterQuery] = useState({
    ...oneToNineFilters,
    Cantrip: true,
  });
  const levelFilteredSpells = useListFilter(spells, 'level', levelFilterQuery);
  const onFiltersChange = (event) => {
    if (!(event.currentTarget === event.target)) {
      setLevelFilterQuery({
        ...levelFilterQuery,
        [event.target.innerHTML]: !levelFilterQuery[event.target.innerHTML],
      });
      // eslint-disable-next-line no-undef, no-console
      console.log(1);
    }

    setSpells(levelFilteredSpells);
  };

  return (
    <div className={classes.filter_bar}>
      <strong className={classes.filter_name}>Level</strong>
      <div className={classes.filter_swich} onClick={onFiltersChange}>
        {Object.keys(levelFilterQuery)
          .sort((a, b) => {
            return a === 'Cantrip' ? -1 : b === 'Cantrip' ? 1 : 0;
          })
          .map((element) => {
            return (
              <span
                key={element}
                className={`${classes.filter_key} ${
                  levelFilterQuery[element] ? '' : classes.active
                }`}
              >
                {element}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default SpellFilter;
