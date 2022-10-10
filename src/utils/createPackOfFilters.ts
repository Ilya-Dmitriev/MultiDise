import { PackOfFilters } from '../types/types';

export const createPackOfFilters = (
  arrayOfNamedObject: { [name: string]: string | string[] }[],
  exseptions: string[],
) => {
  return arrayOfNamedObject.reduce<PackOfFilters>((fitlers, category) => {
    for (const filterName of Object.keys(category)) {
      if (!exseptions.includes(filterName)) {
        if (!fitlers[filterName]) {
          fitlers[filterName] = {}
        }

        if (Array.isArray(category[filterName])) {
          (category[filterName] as string[]).forEach((elem) => {
            fitlers[filterName][elem] = true
          })
        } else {
          fitlers[filterName][(category[filterName] as string)] = true
        }
      }
    }
    return fitlers
  }, {})
}
