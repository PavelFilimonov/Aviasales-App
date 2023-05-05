import React from 'react';
import { format } from 'date-fns';

import classes from './Ticket.module.scss';

export default function Ticket({ ticket }) {
  const { price, segments, carrier } = ticket;
  const transfer = (arrayTransfers) => {
    if (!arrayTransfers.length) {
      return 'пересадки';
    } else if (arrayTransfers.length === 1) {
      return `${arrayTransfers.length} пересадка`;
    } else {
      return `${arrayTransfers.length} пересадки`;
    }
  };

  return (
    <li className={classes.Ticket}>
      <div className={classes.Ticket_MainInfo}>
        <span className={classes.MainInfo_Price}>{price.toLocaleString()} Р</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} />
      </div>
      <div className={classes.Ticket_Version}>
        <div className={classes.Version_Section}>
          <span className={classes.Section_Header}>
            {segments[0].origin} - {segments[0].destination}
          </span>
          <span className={classes.Section_Value}>
            {format(Date.parse(segments[0].date), 'HH:mm')} –{' '}
            {format(new Date(Date.parse(segments[0].date) + segments[0].duration * 60000), 'HH:mm')}
          </span>
        </div>
        <div className={classes.Version_Section}>
          <span className={classes.Section_Header}>В пути</span>
          <span className={classes.Section_Value}>{`${Math.floor(segments[0].duration / 60)}ч ${
            segments[0].duration % 60
          }м`}</span>
        </div>
        <div className={classes.Version_Section}>
          <span className={classes.Section_Header}>{transfer(segments[0].stops)}</span>
          <span className={classes.Section_Value}>
            {segments[0].stops.length ? segments[0].stops.map((item) => item).join(', ') : 'Без пересадок'}
          </span>
        </div>
      </div>
      <div className={classes.Ticket_Version}>
        <div className={classes.Version_Section}>
          <span className={classes.Section_Header}>
            {segments[1].origin} – {segments[1].destination}
          </span>
          <span className={classes.Section_Value}>
            {format(Date.parse(segments[1].date), 'HH:mm')} –{' '}
            {format(new Date(Date.parse(segments[1].date) + segments[1].duration * 60000), 'HH:mm')}
          </span>
        </div>
        <div className={classes.Version_Section}>
          <span className={classes.Section_Header}>В пути</span>
          <span className={classes.Section_Value}>{`${Math.floor(segments[1].duration / 60)}ч ${
            segments[1].duration % 60
          }м`}</span>
        </div>
        <div className={classes.Version_Section}>
          <span className={classes.Section_Header}>{transfer(segments[1].stops)}</span>
          <span className={classes.Section_Value}>
            {segments[1].stops.length ? segments[1].stops.map((item) => item).join(', ') : 'Без пересадок'}
          </span>
        </div>
      </div>
    </li>
  );
}
