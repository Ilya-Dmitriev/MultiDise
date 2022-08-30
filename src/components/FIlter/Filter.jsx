import React, { useMemo } from 'react';

import { HidingButton } from '../UI/Buttons/HidingButton/HidingButton';

import clsx from 'clsx';
import classes from './Filter.module.scss';

export const Filter = ({ className, filterName, filter, setFilter, resetFilter }) => {
  const filterClasses = clsx(classes.filter_bar, className);

  const clearButtonState = useMemo(() => {
    let state = false;
    for (const key in filter) {
      if (Object.prototype.hasOwnProperty.call(filter, key)) {
        state = state || !filter[key];
      }
    }

    return state;
  }, [filter]);

  const onFiltersChange = (event) => {
    if (!(event.currentTarget === event.target)) {
      setFilter({
        ...filter,
        [event.target.innerHTML]: !filter[event.target.innerHTML],
      });
    }
  };

  const onClearClick = () => {
    if (clearButtonState) {
      resetFilter(filter, setFilter);
    }
  };

  const filtresButtons = Object.keys(filter)
    .sort((first, second) => {
      return Number.isInteger(Number(first)) && Number.isInteger(Number(second)) ? 1 : Number.isInteger(Number(second)) ? -1 : 0;
    })
    .map((element) => {
      return (
        <span
          key={element}
          className={clsx(classes.filter_key, !filter[element] && classes.active)}
        >
          {element}
        </span>
      );
    });

  return (
    <div className={filterClasses}>
      <strong className={classes.filter_name}>{filterName}</strong>
      <HidingButton
        className={classes.clear_btn}
        visible={clearButtonState}
        onClick={onClearClick}
      >Clear</HidingButton>
      <div className={classes.filter_swich} onClick={onFiltersChange}>
        {filtresButtons}
      </div>
    </div>
  );
};
