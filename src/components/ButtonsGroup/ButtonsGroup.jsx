import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { sortedTickets } from '../../store/appSlice';

import classes from './ButtonsGroup.module.scss';

export default function ButtonsGroup() {
  const dispatch = useDispatch();
  const btnFilters = useSelector((state) => state.btnFilters);

  return (
    <div className={classes.ButtonsGroup}>
      {btnFilters &&
        btnFilters.map((btn) => (
          <button
            key={btn.id}
            className={classNames(classes.Button, { [classes.Active]: btn.active })}
            onClick={() => dispatch(sortedTickets(btn.id))}
          >
            {btn.text}
          </button>
        ))}
    </div>
  );
}
