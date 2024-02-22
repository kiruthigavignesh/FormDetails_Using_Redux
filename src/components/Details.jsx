import React from 'react';
import { Link } from 'react-router-dom';

const NextFormPage = () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  const formData2 = JSON.parse(localStorage.getItem('formData2'));

  return (
    <div >
      <h2>Form Data</h2>
      <p>Name: {formData.firstName}</p>
      <p>Phone Number: {formData.phone}</p>
      <p>Email: {formData.email}</p>
      <p>Country: {formData2.country}</p>

      <p>state: {formData2.state}</p>
<p>Address 1: {formData2.addressLine1}</p>
<p>Address 2: {formData2.addressLine2}</p>
<p>Pincode: {formData2.pincode}</p>
<Link to="/">
<button className='next-button'>Back</button></Link>
    </div>
  );
};

export default NextFormPage;
