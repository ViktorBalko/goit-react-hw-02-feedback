import React from 'react';
import PropTypes from 'prop-types';

import css from './Section.module.css';

export function Section({ title, children }) {
 return (
  <>
   <div className={css.FeedbackSection}>
    <h1 className={css.FeedbackSection__title}>{title}</h1>
    {children}
   </div>
  </>
 );
}

Section.propTypes = {
 title: PropTypes.string.isRequired,
 children: PropTypes.node.isRequired,
};

export default Section;
