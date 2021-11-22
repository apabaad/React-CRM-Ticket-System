import React from 'react';
import { Link } from 'react-router-dom';
import { BtnPrimary } from '../../components/custom-button/BtnPrimary';
import CustomInput from '../../components/custom-input/CustomInput';

const Login = () => {
  const inputFields = [
    {
      label: 'Email',
      type: 'text',
      name: 'email',
    },

    { label: 'Password', type: 'password', name: 'password' },
  ];
  return (
    <div className="login-page">
      <div className="login-form">
        <h3>Login</h3>
        <hr />
        <div className="input-fields">
          <form>
            {inputFields.map((row, i) => (
              <CustomInput key={i} {...row} />
            ))}
            <div className="form-button">
              <BtnPrimary text="Login" />
            </div>
            <div className="text-end">
              New here? <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
