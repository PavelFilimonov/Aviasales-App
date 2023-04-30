import React from 'react';

import classes from './Header.module.scss';
import Logo from './../../assets/Logo.png';

export default function Header() {
  return (
    <header className={classes.Header}>
      <img className={classes.Logo} src={Logo} alt='aviasales logo' />
    </header>
  );
}
