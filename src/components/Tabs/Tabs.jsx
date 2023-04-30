import React from 'react';

import ButtonsGroup from '../ButtonsGroup';
import TicketsList from '../TicketsList';

import classes from './Tabs.module.scss';

export default function Tabs() {
  return (
    <section className={classes.Tabs}>
      <ButtonsGroup />
      <TicketsList />
    </section>
  );
}
