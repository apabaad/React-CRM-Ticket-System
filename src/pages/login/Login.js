import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BtnPrimary } from '../../components/custom-button/BtnPrimary';
import CustomInput from '../../components/custom-input/CustomInput';
import { adminLogin } from '../profile/adminUserAction';

const initialState = {
  email: 'a@abc.com',
  password: '1234567',
};

const Login = () => {
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin(loginInfo));
  };
  const inputFields = [
    {
      label: 'Email',
      type: 'text',
      name: 'email',
      placeholder: 'a@abc.com',
      onChange: handleOnChange,
      value: loginInfo.email,
      required: true,
    },

    {
      label: 'Password',
      type: 'password',
      name: 'password',
      placeholder: '********',
      onChange: handleOnChange,
      value: loginInfo.password,
      required: true,
    },
  ];
  return (
    <div className="login-page">
      <div className="login-form">
        <h3>Login</h3>
        <hr />
        <div className="input-fields">
          <form onSubmit={handleOnSubmit}>
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
