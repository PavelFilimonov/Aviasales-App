import React from 'react';

import classes from './Filter.module.scss';

export default function Filter() {
  return (
    <section className={classes.Filter}>
      <fieldset className={classes.Fieldset}>
        <legend className={classes.Legend}>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
        <input type='checkbox' className={classes.CustomCheckbox} id='contactChoice1' name='contact' value='email' />
        <label htmlFor='contactChoice1' className={classes.Label}>
          Все
        </label>
        <input type='checkbox' className={classes.CustomCheckbox} id='contactChoice2' name='contact' value='phone' />
        <label htmlFor='contactChoice2' className={classes.Label}>
          Без пересадок
        </label>
        <input type='checkbox' className={classes.CustomCheckbox} id='contactChoice3' name='contact' value='mail' />
        <label htmlFor='contactChoice3' className={classes.Label}>
          1 пересадка
        </label>
        <input type='checkbox' className={classes.CustomCheckbox} id='contactChoice4' name='contact' value='mail' />
        <label htmlFor='contactChoice4' className={classes.Label}>
          2 пересадка
        </label>
        <input type='checkbox' className={classes.CustomCheckbox} id='contactChoice5' name='contact' value='mail' />
        <label htmlFor='contactChoice5' className={classes.Label}>
          3 пересадка
        </label>
      </fieldset>
    </section>
  );
}
