import React from 'react';
import PropTypes from 'prop-types';
import '../style/button.scss';

const Button = props => {
  const { label, click } = props;
  return <button onClick={click}>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
};

export default Button;
