import { To } from 'react-router-dom';

export interface LinkPath {
  path: To,
  title: string,
  key?: React.Key,
}

export interface LinkNamedBundles {
  name: string,
  icon?: string,
  paths: LinkPath[],
  key?: React.Key,
}

export interface FilterInterface {
  [name: string]: boolean,
}

export interface PackOfFilters {
  [name: string]: FilterInterface,
}

export interface WeightsInterface {
  [name: string | number]: number,
}

export interface SpellInterface {
  classes: [string],
  level: string,
  name: string,
  school: string,
  text: string,
}