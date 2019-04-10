import React from 'react';

const Field = props => {
  const { label, value, update } = props;
  // const updateVal = e => {
  //   const { name, value } = e.target;
  //   update(name, value);
  // };
  return (
    <div className='field-wrap'>
      <label htmlFor={label}>{label}: </label>
      <input type='text' id={label} name={label} value={value} onChange={update} />
    </div>
  );
};

export default Field;
