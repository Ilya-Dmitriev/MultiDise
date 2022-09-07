import { useMemo } from 'react';
import { FilterInterface } from 'types/types';

export const useListFlipFilter = (
  objectField: string,
  arrayOfObjects: any[],
  listQuery: FilterInterface,
): any[] => {
  const listQueryState = Object.values(listQuery).every(Boolean);

  const filteredArray = useMemo(() => {
    if (listQueryState) {
      return arrayOfObjects;
    }

    return arrayOfObjects.filter((object: any) => {
      return !listQuery[object[objectField]];
    });
  }, [listQueryState, arrayOfObjects, listQuery, objectField]);
  return filteredArray;
};
