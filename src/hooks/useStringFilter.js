import {
  useMemo,
} from 'react';

export const useStringFilter = (arrayOfObjects, objectField, query) => {
  const filteredArray = useMemo(() => {
    return [
      ...arrayOfObjects,
    ].filter((object) => {
      return object[objectField].toLowerCase().includes(query.toLowerCase());
    });
  }, [
    arrayOfObjects,
    objectField,
    query,
  ]);
  return filteredArray;
};
