import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveAdditionalFormData } from '../redux/actions';

const AdditionalForm = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();

  const [formData2, setFormData2] = useState({
     addressLine1: "",
    addressLine2: "",
     country: "",
    state: "",
     pincode: "",
  });
     const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData2.addressLine1) {
      newErrors.addressLine1 = "Address Line 1 is Required!";
    }
      if (!formData2.addressLine2) {
       newErrors.addressLine2 = "Address Line 2 is Required!";
    }
  if (!formData2.country) {
      newErrors.country = "Country is Required!";
    }
  if (!formData2.state) {
       newErrors.state = "State is Required!";
     }
    if (!formData2.pincode) {
       newErrors.pincode = "Pincode is Required!";
    }

   if (Object.keys(newErrors).length === 0) {
      dispatch(saveAdditionalFormData(formData2)); 
      navigate('/details');
    } 
     else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
    setFormData2({
      ...formData2,
      [name]: value,
    });
  };

  return (
    <>
      <div className='heading'>
        <h1>Registration Form</h1></div>

      <div className="card">
   <form className="form" onSubmit={handleSubmit}>
          <div>

            <label>Address Line 1: </label>
            <input type="text" name="addressLine1" value={formData2.addressLine1} onChange={handleChange} />

        {errors.addressLine1 && <span className="error">{errors.addressLine1}</span>}
          </div>
          <div>
           
            <label>Address Line 2: </label>

            <input type="text" name="addressLine2" value={formData2.addressLine2} onChange={handleChange} />

            {errors.addressLine2 && <span className="error">{errors.addressLine2}</span>}
          </div>
          <div>
          
            <label>Country: </label>
       <select name="country" value={formData2.country} onChange={handleChange}>
              <option value="">Select Country</option>
              <option value="USA">USA</option>
            
              <option value="UK">UK</option>
            </select>
            {errors.country && <span className="error">{errors.country}</span>}
          </div>
      <div>
            <label>State: </label>
            <select name="state" value={formData2.state} onChange={handleChange}>
          <option value="">Select State</option>

                 <option value="CA">California</option>
              <option value="NY">New York</option>
    </select>
            {errors.state && <span className="error">{errors.state}</span>}
          </div>
       <div>

            <label>Pincode: </label>
     <input type="number" name="pincode" value={formData2.pincode} onChange={handleChange} />
            {errors.pincode && <span className="error">{errors.pincode}</span>}
          </div>
          <button type="submit" className="next-button">
            Confirm
          </button>

        </form>
      </div>
    </>
    
  );
};

export default AdditionalForm;
