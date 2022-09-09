import { useMemo } from 'react';
import { HidingButton } from '../UI/Buttons/HidingButton/HidingButton';
import { FilterInterface } from 'types/types';

import clsx from 'clsx';
import classes from './Filter.module.scss';

interface FilterProps {
  className: string,
  filterName: string,
  filter: FilterInterface,
  setFilter: React.Dispatch<React.SetStateAction<FilterInterface>>,
  resetFilter: (
    filter: FilterInterface,
    setFilter: React.Dispatch<React.SetStateAction<FilterInterface>>
  ) => void,
}

export const Filter: React.FC<FilterProps> = ({
  className,
  filterName,
  filter,
  setFilter,
  resetFilter,
}) => {
  const filterClasses: string = clsx(classes.filter_bar, className);

  const clearButtonState: boolean = useMemo(() => {
    return !Object.values(filter).every(Boolean);
  }, [filter]);

  const onFiltersChange: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (!(event.currentTarget === event.target)) {
      //TODO: выяснить костыльность переопределения типа
      const filterName: string = (event.target as HTMLElement).innerText
      setFilter({
        ...filter,
        [filterName]: !filter[filterName],
      });
    }
  };

  const onClearClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (clearButtonState) {
      resetFilter(filter, setFilter);
    }
  };

  const filtresButtons: React.ReactElement[] = Object.keys(filter)
    .sort((first, second) => {
      return Number.isInteger(Number(first)) && Number.isInteger(Number(second)) ? 1 : Number.isInteger(Number(second)) ? -1 : 0;
    })
    .map((filterKey: string) => {
      return (
        <span
          key={filterKey}
          className={clsx(classes.filter_key, !filter[filterKey] && classes.active)}
        >
          {filterKey}
        </span>
      );
    });

  return (
    <div className={filterClasses}>
      <div className={classes.filter_head}>
        <div className={classes.fake_line}>Clear</div>
        <strong className={classes.filter_name}>{filterName}</strong>
        <HidingButton
          variant="collapse"
          className={classes.clear_btn}
          visible={clearButtonState}
          onClick={onClearClick}
        >Clear</HidingButton>
      </div>
      <div className={classes.filter_swiches} onClick={onFiltersChange}>
        {filtresButtons}
      </div>
    </div>
  );
};
