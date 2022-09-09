import { PackOfFilters } from "types/types"
import { Filter } from "../"

import clsx from "clsx"
import classes from './FilterWindow.module.scss'

interface FilterWindowProps {
  className: string,
  filtersPack: PackOfFilters,
  setFiltersPack: React.Dispatch<React.SetStateAction<PackOfFilters>>,
  resetFiltersPack: (
    resetPart: string,
    filtersPack: PackOfFilters,
    setFiltersPack: React.Dispatch<React.SetStateAction<PackOfFilters>>,
  ) => void,
}

export const FilterWindow: React.FC<FilterWindowProps> = ({
  className,
  filtersPack,
  setFiltersPack,
  resetFiltersPack,
}) => {
  const filersElements: React.ReactElement[] = Object.keys(filtersPack).map((filterName): React.ReactElement => {
    return <Filter
      key={filterName}
      className={classes.filter}
      filterName={filterName}
      filtersPack={filtersPack}
      setFiltersPack={setFiltersPack}
      resetFiltersPack={resetFiltersPack}
    />
  })

  const filterWindowClasses: string = clsx(className, classes.filters_wrap)

  return (
    <div className={filterWindowClasses}>
      <div className={classes.windiow_name}>Filters</div>
      <div className={classes.filters_windiow}>
        {filersElements}
      </div>
    </div>
  )
}
