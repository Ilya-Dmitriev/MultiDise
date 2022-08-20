import { useMemo } from "react"

export const useFilter = (arrayOfObjects, objectFiled, query) => {
    const filteredArr = useMemo(() => {
        return [...arrayOfObjects].filter((object) => {
            return object[objectFiled].toLowerCase().includes(query.toLowerCase())
        })
    }, [arrayOfObjects, objectFiled, query])
    return filteredArr
}