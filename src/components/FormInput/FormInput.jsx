import React from 'react';

import './FormInput.scss';

const FormInput = ({ label, handleChange, ...props }) => (
  <div className="group">
    <input {...props} className="form-input" onChange={handleChange} />
    {label && (
      <label className={`${props.value.length && 'shrink'} form-input-label`}>
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
