export const namedAndCustomSort = (namedArray, additionalSorting) => {
  const nameSortedArray = [
    ...namedArray,
  ].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  const additionalSortedArray = nameSortedArray.sort((a, b) => {
    return (
      additionalSorting[a[additionalSorting.argument]] -
            additionalSorting[b[additionalSorting.argument]]
    );
  });
  return additionalSortedArray;
};
