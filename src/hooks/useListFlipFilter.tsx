import { useMemo } from 'react';
import { PackOfFilters } from 'types/types';

export function useListFlipFilter<T>(
  filterName: string,
  arrayOfObjects: T[],
  filtersPack: PackOfFilters,
): T[] {
  const filtersPackState = Object.values(filtersPack[filterName]).every(Boolean);

  const filteredArray = useMemo(() => {
    if (filtersPackState) {
      return arrayOfObjects;
    }

    return arrayOfObjects.filter((object: any) => {
      return !filtersPack[filterName][object[filterName]];
    });
  }, [filtersPackState, arrayOfObjects, filtersPack, filterName]);
  return filteredArray;
};
