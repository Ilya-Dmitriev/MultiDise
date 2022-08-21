import { useMemo } from "react"

export const useListFilter = (arrayOfObjects, objectField, listQuery) => {
    const listQueryState = useMemo(() => {
        let mass = true
        for (let key in listQuery) {
            mass = mass && listQuery[key]
        }
        return mass
    }
    )
    const filteredArr = useMemo(() => {
        if (listQueryState) {
            return arrayOfObjects
        } else {
            return [...arrayOfObjects].filter((object) => {
                return !listQuery[object[objectField]]
            })
        }
    }, [arrayOfObjects, objectField, listQuery])
    return filteredArr
}