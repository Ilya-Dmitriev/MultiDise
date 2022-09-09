import { useMemo } from 'react';
import { PackOfFilters } from 'types/types';

//TODO: поработать над универсальной типизацией входных и выходных значений
export const useListArrayFlipFilter = (
  filterName: string,
  arrayOfObjects: any[],
  filtersPack: PackOfFilters,
): any[] => {
  const listQueryState = Object.values(filtersPack[filterName]).every(Boolean);

  const filteredArray = useMemo(() => {
    if (listQueryState) {
      return arrayOfObjects;
    }

    return arrayOfObjects.filter((object: any) => {
      // eslint-disable-next-line unicorn/no-array-reduce
      return object[filterName].reduce((accumulator: boolean, currentValue: string) => {
        return accumulator || !filtersPack[filterName][currentValue];
      }, false);
    });
  }, [listQueryState, arrayOfObjects, filtersPack, filterName]);
  return filteredArray;
};
