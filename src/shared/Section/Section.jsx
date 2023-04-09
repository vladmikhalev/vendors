import React from 'react';
import './Section.css';

function Section({ children }) {
  return (
    <div className="section">
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Section;
