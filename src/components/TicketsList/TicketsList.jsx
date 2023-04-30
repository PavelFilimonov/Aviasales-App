import React from 'react';

import Ticket from '../Ticket';

import classes from './TicketsList.module.scss';

export default function TicketsList() {
  return (
    <ul className={classes.TicketsList}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
  );
}
