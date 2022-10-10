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

export interface PropsWeigthsInterface {
  props: WeightsInterface,
  [name: string]: WeightsInterface,
}

export interface SpellInterface {
  classes: [string],
  level: string,
  name: string,
  school: string,
  text: string,
}

export interface ClassInterface {
  name: string,
  hitDise: string,
  sourse: string,
}