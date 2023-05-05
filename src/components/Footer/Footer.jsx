import React from 'react';
import { useDispatch } from 'react-redux';

import { changeCounter } from '../../store/appSlice';

import classes from './Footer.module.scss';

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <footer className={classes.Footer}>
      <button className={classes.Footer_Btn} onClick={() => dispatch(changeCounter())}>
        Показать еще 5 билетов!
      </button>
    </footer>
  );
}
