import React from 'react';
import css from './Notification.module.css';

export function Notification({ message }) {
 return (
  <div className={css.NotificationInscription}>
   <p className={css.NotificationInscription__tit}>{message}</p>
  </div>
 );
}

export default Notification;
