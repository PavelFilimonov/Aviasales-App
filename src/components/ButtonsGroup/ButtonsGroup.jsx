import React from 'react';

import classes from './ButtonsGroup.module.scss';

export default function ButtonsGroup() {
  return (
    <div className={classes.ButtonsGroup}>
      <button type='button' className={classes.Button + ' ' + classes.Active}>
        Самый дешевый
      </button>
      <button type='button' className={classes.Button}>
        Самый быстрый
      </button>
      <button type='button' className={classes.Button}>
        Оптимальный
      </button>
    </div>
  );
}
