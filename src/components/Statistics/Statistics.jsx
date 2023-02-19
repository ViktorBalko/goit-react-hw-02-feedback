import React from 'react';
import PropTypes from 'prop-types';

import css from './Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positivePercent }) {
 return (
  <>
   <div className={css.StatisticsList}>
    <p className={css.StatisticsList__item}>{good}</p>
    <p className={css.StatisticsList__item}>{neutral}</p>
    <p className={css.StatisticsList__item}>{bad} </p>
    <p className={css.StatisticsList__item}>
     Total: <span className={css.StatisticsList__itemNumber}>{total}</span>
    </p>
    <p className={css.StatisticsList__item}>
     Positive feedback:{' '}
     <span className={css.StatisticsList__itemNumber}>{positivePercent}</span>%
    </p>
   </div>
  </>
 );
}

Statistics.propTypes = {
 good: PropTypes.number.isRequired,
 neutral: PropTypes.number.isRequired,
 bad: PropTypes.number.isRequired,
 total: PropTypes.number.isRequired,
 positivePercent: PropTypes.number.isRequired,
};
