import { useMemo } from 'react';
import { FilterInterface } from 'types/types';

//TODO: поработать над универсальной типизацией входных и выходных значений
export const useListArrayFlipFilter = (
  objectArrayField: string,
  arrayOfObjects: any[],
  listQuery: FilterInterface,
): any[] => {
  const listQueryState = Object.values(listQuery).every(Boolean);

  const filteredArray = useMemo(() => {
    if (listQueryState) {
      return arrayOfObjects;
    }

    return arrayOfObjects.filter((object: any) => {
      // eslint-disable-next-line unicorn/no-array-reduce
      return object[objectArrayField].reduce((accumulator: boolean, currentValue: string) => {
        return accumulator || !listQuery[currentValue];
      }, false);
    });
  }, [listQueryState, arrayOfObjects, listQuery, objectArrayField]);
  return filteredArray;
};
