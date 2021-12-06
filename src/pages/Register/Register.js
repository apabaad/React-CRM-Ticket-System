import React, { useState } from 'react';
import {
  BtnOutline,
  BtnPrimary,
} from '../../components/custom-button/BtnPrimary';
import CustomInput from '../../components/custom-input/CustomInput';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userRegisterAPI } from '../../apis/registrationAPI';

const initialState = {
  fName: '',
  lName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
};
const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const [isPending, setIsPending] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = formData;
    const result = await userRegisterAPI(rest);
    console.log(result);
    if (result.status === 'success') {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  const handleOnBlur = (e) => {
    const { password, confirmPassword } = formData;
    let error = '';
    if (password !== confirmPassword) {
      error = 'Password not matched';
    }
    error && toast.error(error);
    error = '';
  };

  console.log(formData);
  const inputFields = [
    {
      label: 'First Name',
      type: 'text',
      name: 'fName',
      required: true,
      placeholder: 'John',
    },
    {
      label: 'Last Name',
      type: 'text',
      name: 'lName',
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
      onBlur: handleOnBlur,
    },
    {
      label: 'Confirm Password',
      type: 'password',
      name: 'confirmPassword',
      required: true,
      placeholder: '********',
      onBlur: handleOnBlur,
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
          {isPending && 'Please wait...'}
          <form onSubmit={handleOnSubmit}>
            {inputFields.map((row, i) => (
              <CustomInput key={i} {...row} onChange={handleOnChange} />
            ))}

            <div className="form-button">
              <BtnOutline
                text="Register"
                disabled={formData.password !== formData.confirmPassword}
              />
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
