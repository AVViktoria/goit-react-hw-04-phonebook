import PropTypes from 'prop-types';

// import styled from 'styled-components'

//*    styles..//
const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};
export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

//*Node
// Anything that can be rendered: numbers, strings, elements or an array
// (or fragment) containing these types.
