import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { saveFormData } from '../redux/actions';
const Form = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState({});

  const isValidName = (name) => {
      const regexp = /^[a-zA-Z ]*$/;
  return regexp.test(name);
  };

  const isValidEmail = (email) => {
     const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexp.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = 'Name is Required!';
    } else if (!isValidName(formData.firstName)) {
      newErrors.firstName = 'Only characters and spaces allowed!';
    }
    if (!formData.phone) {
      newErrors.phone = 'Mobile Number is Required!';
    }
    if (!formData.email) {
      newErrors.email = 'Email Id is Required!';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Email ID Should be Proper Format!';
    }

    if (Object.keys(newErrors).length === 0) {
      dispatch(saveFormData(formData)); 
      navigate('/nextform');
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <>
    <div className='heading'><h1>Registration Form</h1></div>
    <div className="card">
   
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
     name="firstName"
            onChange={handleChange}
            value={formData.firstName}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>
        <div>
          <label>Phone Number: </label>
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
         name="email"
            onChange={handleChange}
      value={formData.email}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <button type="submit" className="next-button">
          Next Page
        </button>
      </form>
    </div>
    </>
  );
};

export default Form;
