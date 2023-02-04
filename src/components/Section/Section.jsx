import React from 'react';
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

export default Section;
