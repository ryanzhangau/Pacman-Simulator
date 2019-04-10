import React from 'react';
import PropTypes from 'prop-types';
import '../style/field.scss';

const Field = props => {
  const { type, label, value, update } = props;
  return (
    <div className='field-wrap'>
      <label htmlFor={label}>{label}: </label>
      <input type={type} id={label} name={label} value={value} onChange={update} />
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  update: PropTypes.func.isRequired
};

export default Field;
