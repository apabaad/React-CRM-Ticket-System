import React from 'react';
import './style.scss';

const CustomInput = ({ label, ...rest }) => {
  return (
    <div className="custom-input">
      <label htmlFor="">{label}:</label>
      {/* <input type={type} name={name} /> */}
      <input {...rest}></input>
    </div>
  );
};

export default CustomInput;
