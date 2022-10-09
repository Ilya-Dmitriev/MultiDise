import { Navigation } from '../Navigation/Navigation'
import { mainAsdressList } from '../../router/mainAsdressList'

import classes from './Header.module.scss'
import { MainButton, MainNavLink } from '../UI'

export const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <Navigation className={classes.nav_icon} adressBundles={mainAsdressList} />
      <MainNavLink to='/' variant='default' className={classes.home}>HBVerse</MainNavLink>
      <MainButton>In progress</MainButton>
    </header>
  )
}
