import React from 'react';
import { validatePassword } from '../utils/common.js';


const ViTextInput = (props) => {
  

  // Function to determine if error should be shown for email
  const showEmailError = () => {
    return (
      props.isSubmitted &&
      props.name === 'password' &&
      !validatePassword(props.value)
    );
  };

  // Function to determine if any error should be shown
  const showError = () => {
    return props.isSubmitted && !props.value;
  };

  return (
    <div className="input-data">
      <input
        type="password"
        id={props.id}
        name={props.name}
        onChange={props.handleChange}
        value={props.value}
        {...props}
      />
      <div className="underline"></div>
      <label>{props.title}</label>
      {showEmailError() && <span>{props.errMessage}</span>}
      {showError() && props.name !== 'password' && <span>{props.errMessage}</span>}
    </div>
  );
};

export default ViTextInput;