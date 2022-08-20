import * as pages from '../pages/pages.js'

export const routes = [
    { element: pages.NotFound, path: '*', index: false },
    { element: pages.Home, path: '/', index: true },
    { element: pages.Classes, path: 'classes', index: false },
    { element: pages.Rases, path: 'rases', index: false },
    { element: pages.Spells, path: 'spells', index: false },
    { element: pages.Profile, path: 'profile', index: false },
]