import { WeightsInterface } from "types/types";

interface NamedArrayInterfase {
  [name: string]: any,
};

export function namedAndCustomSort<T extends NamedArrayInterfase>(
  namedArray: T[],
  weightSorting: WeightsInterface | false,
  sortField: string,
): T[] {
  const nameSortedArray = [...namedArray].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  if (weightSorting) {
    const weightSortedArray = nameSortedArray.sort((a, b) => {
      return (
        weightSorting[a[sortField]]
        - weightSorting[b[sortField]]
      );
    });
    return weightSortedArray;
  }
  return nameSortedArray;
};
