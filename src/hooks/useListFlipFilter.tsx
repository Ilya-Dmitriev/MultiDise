import { useMemo } from 'react';
import { PackOfFilters } from 'types/types';

export const useListFlipFilter = (
  filterName: string,
  arrayOfObjects: any[],
  filtersPack: PackOfFilters,
): any[] => {
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
