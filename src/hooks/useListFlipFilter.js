import { useMemo } from 'react';

export const useListFlipFilter = (arrayOfObjects, objectField, listQuery) => {
  const listQueryState = Object.values(listQuery).every(Boolean);

  const filteredArray = useMemo(() => {
    if (listQueryState) {
      return arrayOfObjects;
    }

    return arrayOfObjects.filter((object) => {
      return !listQuery[object[objectField]];
    });
  }, [listQueryState, arrayOfObjects, listQuery, objectField]);
  return filteredArray;
};
