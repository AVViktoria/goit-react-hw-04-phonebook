import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className="section">
      {/* {title && <h2>{title}</h2>} */}
      {children}
    </section>
  );
};
export default Section;

Section.propTypes = {
  children: PropTypes.node,
};
