import React from 'react';

import classes from './Ticket.module.scss';
import S7_Logo from './../../assets/S7_Logo.png';

export default function Ticket() {
  return (
    <li className={classes.Ticket}>
      <div className={classes.Ticket_MainInfo}>
        <span className={classes.MainInfo_Price}>13 400 P</span>
        <img src={S7_Logo} />
      </div>
      <div className={classes.Ticket_Version}>
        <div className={classes.Version_Section}>
          <span className={classes.Section_Header}>MOW – HKT</span>
          <span className={classes.Section_Value}>10:45 – 08:00</span>
        </div>
        <div className={classes.Version_Section}>
          <span className={classes.Section_Header}>В пути</span>
          <span className={classes.Section_Value}>21ч 15м</span>
        </div>
        <div className={classes.Version_Section}>
          <span className={classes.Section_Header}>2 пересадки</span>
          <span className={classes.Section_Value}>HKG, JNB</span>
        </div>
      </div>
      <div className={classes.Ticket_Version}>
        <div className={classes.Version_Section}>
          <span className={classes.Section_Header}>MOW – HKT</span>
          <span className={classes.Section_Value}>10:45 – 08:00</span>
        </div>
        <div className={classes.Version_Section}>
          <span className={classes.Section_Header}>В пути</span>
          <span className={classes.Section_Value}>21ч 15м</span>
        </div>
        <div className={classes.Version_Section}>
          <span className={classes.Section_Header}>2 пересадки</span>
          <span className={classes.Section_Value}>HKG, JNB</span>
        </div>
      </div>
    </li>
  );
}
