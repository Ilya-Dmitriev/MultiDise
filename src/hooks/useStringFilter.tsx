import { useMemo } from 'react';

export const useStringFilter = (
  objectField: string,
  arrayOfObjects: any[],
  query: string,
): any[] => {
  const filteredArray = useMemo(() => {
    return [...arrayOfObjects].filter((object) => {
      return object[objectField].toLowerCase().includes(query.toLowerCase());
    });
  }, [arrayOfObjects, objectField, query]);
  return filteredArray;
};
