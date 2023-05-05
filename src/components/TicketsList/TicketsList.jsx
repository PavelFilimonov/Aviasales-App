import React from 'react';
import { useSelector } from 'react-redux';
import { Alert, Spin } from 'antd';

import Ticket from '../Ticket';

import classes from './TicketsList.module.scss';

export default function TicketsList() {
  const counter = useSelector((state) => state.counter);
  const arrayCountTransfer = useSelector((state) => state.arrayCountTransfer);
  const ticketsList = useSelector((state) => state.tickets);
  const status = useSelector((state) => state.status);
  const checkboxes = useSelector((state) => state.checkboxes);

  const sortByActiveCheckbox = (ticketsList, arrayCountTransfer) => {
    return ticketsList.filter(
      (item) =>
        arrayCountTransfer.includes(item.ticket.segments[0].stops.length) &&
        arrayCountTransfer.includes(item.ticket.segments[1].stops.length)
    );
  };

  const viewTickets = sortByActiveCheckbox(ticketsList, arrayCountTransfer).slice(0, counter);

  return (
    <>
      {checkboxes.filter((checkbox) => checkbox.checked).length ? (
        <ul className={classes.TicketsList}>
          {viewTickets && viewTickets.map((ticket) => <Ticket key={ticket.id} {...ticket} />)}
        </ul>
      ) : (
        <Alert message='Билеты не найдены' description='Выберете количество пересадок' showIcon />
      )}
      {status && <Spin tip='Loading' size='large' spinning={status} />}
    </>
  );
}
