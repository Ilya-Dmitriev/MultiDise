import { useMemo } from "react"

export const useSrtingFilter = (arrayOfObjects, objectField, query) => {
    const filteredArr = useMemo(() => {
        return [...arrayOfObjects].filter((object) => {
            return object[objectField].toLowerCase().includes(query.toLowerCase())
        })
    }, [arrayOfObjects, objectField, query])
    return filteredArr
}