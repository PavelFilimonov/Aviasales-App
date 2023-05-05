import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeCheckboxStatus } from '../../store/appSlice';

import classes from './Filter.module.scss';

export default function Filter() {
  const dispatch = useDispatch();
  const checkboxes = useSelector((state) => state.checkboxes);

  return (
    <section className={classes.Filter}>
      <fieldset className={classes.Fieldset}>
        <legend className={classes.Legend}>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
        {checkboxes &&
          checkboxes.map((checkbox) => (
            <div key={checkbox.id}>
              <input
                type='checkbox'
                className={classes.CustomCheckbox}
                id={checkbox.id}
                checked={checkbox.checked}
                onChange={() => dispatch(changeCheckboxStatus(checkbox.id))}
              />
              <label htmlFor={checkbox.id} className={classes.Label}>
                {checkbox.text}
              </label>
            </div>
          ))}
      </fieldset>
    </section>
  );
}
