export const namedAndCustomSort = (namedArray, additionalSorting) => {
    const nameSortedArr = [...namedArray].sort((a, b) => {
        return a.name.localeCompare(b.name)
    })
    const additionalSortedArr = nameSortedArr.sort((a, b) => {
        return additionalSorting[a[additionalSorting.argument]] -
            additionalSorting[b[additionalSorting.argument]]
    })
    return additionalSortedArr
}