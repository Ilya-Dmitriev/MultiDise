import { useMemo } from 'react';
import { PackOfFilters } from 'types/types';

export function useListArrayFlipFilter<T>(
  filterName: string,
  arrayOfObjects: T[],
  filtersPack: PackOfFilters,
): T[] {
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
