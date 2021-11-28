import React from 'react';
import { BtnPrimary } from '../../components/custom-button/BtnPrimary';
import CustomInput from '../../components/custom-input/CustomInput';
import { Link } from 'react-router-dom';

const Register = () => {
  const inputFields = [
    {
      label: 'First Name',
      type: 'text',
      name: 'fname',
      required: true,
      placeholder: 'John',
    },
    {
      label: 'Last Name',
      type: 'text',
      name: 'lname',
      required: true,
      placeholder: 'Smith',
    },
    {
      label: 'Email',
      type: 'text',
      name: 'email',
      required: true,
      placeholder: 'a@abc.com',
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      required: true,
      placeholder: '********',
    },
    {
      label: 'Confirm Password',
      type: 'password',
      name: 'password2',
      required: true,
      placeholder: '********',
    },
    {
      label: 'Phone',
      type: 'number',
      name: 'phone',
      required: true,
      placeholder: '01-00000',
    },
  ];
  return (
    <div className="login-page">
      <div className="login-form">
        <h3>Register</h3>
        <hr />
        <div className="input-fields">
          <form>
            {inputFields.map((row, i) => (
              <CustomInput key={i} {...row} />
            ))}
            <div className="form-button">
              <BtnPrimary text="Register" />
            </div>
            <div className="text-end">
              Already have an account? <Link to="/login">Login.</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
