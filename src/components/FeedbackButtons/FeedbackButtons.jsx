import React from 'react';
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
  //   <ul>
  //    <button
  //     className={css.BtnGood}
  //     type="button"
  //     name="buttonGood"

  //    >
  //     Good
  //    </button>

  //    <button
  //     onClick={leaveFeedback}
  //     className={css.BtnNeutral}
  //     type="button"
  //     name="buttonNeutral"

  //    >
  //     Neutral
  //    </button>
  //    <button
  //     onClick={leaveFeedback}
  //     className={css.BtnBad}
  //     type="button"
  //     name="buttonBad"

  //    >
  //     Bad
  //    </button>
  //   </ul>
 );
}
