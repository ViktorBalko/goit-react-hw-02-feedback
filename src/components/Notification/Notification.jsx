import React from 'react';
import PropTypes from 'prop-types';

import css from './Notification.module.css';

export function Notification({ message }) {
 return (
  <div className={css.NotificationInscription}>
   <p className={css.NotificationInscription__tit}>{message}</p>
  </div>
 );
}

Notification.propTypes = {
 message: PropTypes.string.isRequired,
};

export default Notification;
