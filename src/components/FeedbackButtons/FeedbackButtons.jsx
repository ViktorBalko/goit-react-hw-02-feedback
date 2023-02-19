import React from 'react';
import PropTypes from 'prop-types';

import css from './FeedbackButtons.module.css';

export function FeedbackButtons({ buttons, leaveFeedback }) {
 const keys = Object.keys(buttons);

 return (
  <ul className={css.FeedbackButtons__section}>
   {keys.map(key => (
    <li className={css.FeedbackButtons__item} key={key}>
     <span className={css.FeedbackButtons__itemPlate}></span>
     <button
      className={css.FeedbackButtons__button}
      key={key}
      type="button"
      name={key}
      onClick={leaveFeedback}
     >
      {key}
     </button>
    </li>
   ))}
  </ul>
 );
}

FeedbackButtons.propTypes = {
 buttons: PropTypes.object.isRequired,
 leaveFeedback: PropTypes.func.isRequired,
};
