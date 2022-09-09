import { useMemo, useState } from 'react';
import { PackOfFilters } from 'types/types';

import { HidingButton, MainInput, MainNavLink } from '../UI';
import { useStringFilter } from '../../hooks/useStringFilter';

import classes from './ItemLinksManager.module.scss'
import clsx from 'clsx';

interface ItemLinksManagerProps {
  className: string,
  arrayOfItems: any[]
  filtersPack: PackOfFilters,
  setFiltersPack: React.Dispatch<React.SetStateAction<PackOfFilters>>,
  itemInitCallback: (
    arg0: any
  ) => React.ReactElement,
  resetFiltersPack: (
    resetPart: string,
    filtersPack: PackOfFilters,
    setFiltersPack: React.Dispatch<React.SetStateAction<PackOfFilters>>,
  ) => void,
}

export const ItemLinksManager: React.FC<ItemLinksManagerProps> = ({
  className,
  arrayOfItems,
  filtersPack,
  itemInitCallback,
  setFiltersPack,
  resetFiltersPack,
}) => {
  const [nameFilterQuery, setNameFilterQuery] = useState<string>('');

  const nameFilteredItems = useStringFilter('name', arrayOfItems, nameFilterQuery);

  const allFiltersClear: boolean = useMemo(() => {
    let filtersState = true;
    for (const filrerName of Object.keys(filtersPack)) {
      filtersState = filtersState && Object.values(filtersPack[filrerName]).every(Boolean)
    }
    filtersState = filtersState && !Boolean(nameFilterQuery);

    return filtersState;
  }, [filtersPack, nameFilterQuery]);

  const clearAllFilters = (): void => {
    resetFiltersPack('all', filtersPack, setFiltersPack);
    setNameFilterQuery('');
  };

  const filteredItemLinksList: React.ReactElement[] = useMemo(() => {
    const itemClassName = classes.link_item
    return nameFilteredItems.map((props) => itemInitCallback({ ...props, itemClassName }));
  }, [nameFilteredItems]);

  const ItemListClasses = clsx(className, classes.item_list)

  return (
    <div className={ItemListClasses}>
      <div className={classes.managebar}>
        <MainInput
          className={classes.input}
          placeholder="Search"
          value={nameFilterQuery}
          onChange={({ target }) => {
            setNameFilterQuery(target.value);
          }}
        />
        <HidingButton
          className={classes.clear_btn}
          visible={!allFiltersClear}
          onClick={() => {
            if (!allFiltersClear) {
              clearAllFilters();
            }
          }}
        >Clear all
        </HidingButton>
        <MainNavLink
          className={classes.filter_btn}
          to="filter"
          variant='round'
        >
          Filter
        </MainNavLink>
      </div>
      <div
        className={classes.list}
      >
        <div className={classes.list_top_shadow} />
        {filteredItemLinksList}
        <div className={classes.list_bottom_shadow} />
      </div>
    </div>
  )
}
