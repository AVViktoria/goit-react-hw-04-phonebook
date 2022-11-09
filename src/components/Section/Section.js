import React from 'react';
import PropTypes from 'prop-types';

export default function Section({ children }) {
  return (
    <section className="section">
      {/* {title && <h2>{title}</h2>} */}
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node,
};
