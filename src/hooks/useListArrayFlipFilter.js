import { useMemo } from 'react';

export const useListArrayFlipFilter = (arrayOfObjects, objectArrayField, listQuery) => {
  const listQueryState = Object.values(listQuery).every(Boolean);

  const filteredArray = useMemo(() => {
    if (listQueryState) {
      return arrayOfObjects;
    }

    return arrayOfObjects.filter((object) => {
      // eslint-disable-next-line unicorn/no-array-reduce
      return object[objectArrayField].reduce((accumulator, currentValue) => {
        return accumulator || !listQuery[currentValue];
      }, false);
    });
  }, [listQueryState, arrayOfObjects, listQuery, objectArrayField]);
  return filteredArray;
};
