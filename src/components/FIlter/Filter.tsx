import { useMemo } from 'react';
import { HidingButton } from '../UI/Buttons/HidingButton/HidingButton';
import { PackOfFilters } from 'types/types';

import clsx from 'clsx';
import classes from './Filter.module.scss';

interface FilterProps {
  className: string,
  filterName: string,
  filtersPack: PackOfFilters,
  setFiltersPack: React.Dispatch<React.SetStateAction<PackOfFilters>>,
  resetFiltersPack: (
    resetPart: string,
    filtersPack: PackOfFilters,
    setFiltersPack: React.Dispatch<React.SetStateAction<PackOfFilters>>,
  ) => void,
}

export const Filter: React.FC<FilterProps> = ({
  className,
  filterName,
  filtersPack,
  setFiltersPack,
  resetFiltersPack,
}) => {
  const clearButtonState: boolean = useMemo(() => {
    return !Object.values(filtersPack[filterName]).every(Boolean);
  }, [filtersPack]);

  const onFiltersChange: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (!(event.currentTarget === event.target)) {
      //TODO: выяснить костыльность переопределения типа
      const clickedProp: string = (event.target as HTMLElement).innerText;
      const changedFiltersPack = { ...filtersPack };
      changedFiltersPack[filterName][clickedProp] = !filtersPack[filterName][clickedProp];
      setFiltersPack(changedFiltersPack);
    }
  };

  const onReverseClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    const reversedFilterInPack = { ...filtersPack };
    for (const filterProp of Object.keys(filtersPack[filterName])) {
      reversedFilterInPack[filterName][filterProp] = !reversedFilterInPack[filterName][filterProp]
    };
    setFiltersPack(reversedFilterInPack);
  };

  const onClearClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (clearButtonState) {
      resetFiltersPack(filterName, filtersPack, setFiltersPack);
    }
  };

  const filtresButtons: React.ReactElement[] = Object.keys(filtersPack[filterName])
    .sort((first, second) => {
      return Number.isInteger(Number(first)) && Number.isInteger(Number(second)) ? 1 : Number.isInteger(Number(second)) ? -1 : 0;
    })
    .map((filterKey: string) => {
      return (
        <span
          key={filterKey}
          className={clsx(classes.filter_key, !filtersPack[filterName][filterKey] && classes.active)}
        >
          {filterKey}
        </span>
      );
    });

  const filterClasses: string = clsx(classes.filter_bar, className);

  return (
    <div className={filterClasses}>
      <div className={classes.filter_head}>
        <HidingButton
          variant="collapse"
          className={classes.reverse_btn}
          visible={clearButtonState}
          onClick={onReverseClick}
        >Reverse</HidingButton>
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
    </div >
  );
};
