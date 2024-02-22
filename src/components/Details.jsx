import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NextFormPage = () => {
  const formData = useSelector(state => state.form.formData);
  const formData2 = useSelector(state => state.form.formData2);

  return (
    <div>
      <h2>Form Data</h2>
      <table>
        <tbody>
          <tr>
              <td>Name:</td>
            <td>{formData && formData.firstName}</td>
          </tr>
          <tr>
             <td>Phone Number:</td>
            <td>{formData && formData.phone}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{formData && formData.email}</td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>{formData2 && formData2.country}</td>
          </tr>
          <tr>
            <td>State:</td>
            <td>{formData2 && formData2.state}</td>
          </tr>
          <tr>
            <td>Address 1:</td>
            <td>{formData2 && formData2.addressLine1}</td>
          </tr>
          <tr>
       <td>Address 2:</td>
            <td>{formData2 && formData2.addressLine2}</td>
             </tr>
          <tr>
            <td>Pincode:</td>
            <td>{formData2 && formData2.pincode}</td>
          </tr>
           </tbody>
      </table>
      <Link to="/">
        <button className='next-button'>Back</button>
      </Link>
    </div>
  );
};

export default NextFormPage;
