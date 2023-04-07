import React from 'react';
import styles from './Section.css';

export function Section({ children }) {
  return (
    <div className={styles.section}>
      {children}
    </div>
  )
}
