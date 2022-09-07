import { spellInterface, weightsInterface } from "types/types";

export let namedAndCustomSort: (
  namedArray: spellInterface[],
  weightSorting: weightsInterface,
  sortField: 'level',
) => spellInterface[];

namedAndCustomSort = (
  namedArray,
  weightSorting,
  sortField
) => {
  const nameSortedArray = [...namedArray].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  const weightSortedArray = nameSortedArray.sort((a, b) => {
    return (
      weightSorting[a[sortField]]
      - weightSorting[b[sortField]]
    );
  });
  return weightSortedArray;
};
