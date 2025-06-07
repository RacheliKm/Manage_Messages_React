import React, { FC } from 'react';
import './InsertUser.scss';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { InsertUsers } from '../../types/insertUser.model';

interface InsertUserProps {}

const InsertUser  = () => {

  const sendForm=(values:any)=>{
    alert(JSON.stringify(values));
    alert("נרשמת בהצלחה!")
  }
  //יצירת אובייקט לניהול הטופס
  const myForm=useFormik({
    //האובייקט שהטופס מכיל
    initialValues:new InsertUsers(),
    //פונקציה שתופעל שלוחצים על סבמיט
    onSubmit:sendForm,
    //סכמה עבור בדיקות תקינות
    validationSchema:yup.object().shape({
      name:yup.string().required(" שדה חובה").test('min-2','חייב להיות  גדול מ2 תווים',(value)=>{
        return value.length>2
      }),
      id:yup.number().required(" שדה חובה").positive().integer(),
      
      userName:yup.string().required(" שדה חובה").test('min-2','חייב להיות  גדול מ2 תווים',(value)=>{
        return value.length>2
      }),
      email:yup.string().email().required(" שדה חובה"),
      street:yup.string().required(" שדה חובה"),
      city:yup.string().required(" שדה חובה"),
      zipcode:yup.string().required(" שדה חובה"),
      phone:yup.string().required(" שדה חובה").test('max-12',(value)=>{
        return value.length<20
      }),
      website:yup.string().required(" שדה חובה"),
      companyName:yup.string().required(" שדה חובה"),
      catchPhrase:yup.string().required(" שדה חובה"),
      bs:yup.string().required(" שדה חובה")
    })
  })

  return <div className="InsertUser">
   <div className="htmlFormbold-main-wrapper">
  <div className="htmlFormbold-htmlForm-wrapper">
    {/* <img src="your-image-url-here.jpg"> */}
    <form  onSubmit={myForm.handleSubmit} >
      <div className="htmlFormbold-htmlForm-title">
        <h2 className="">Register now</h2>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </h5>
      </div>

      <div>
          <label htmlFor="id" className="htmlFormbold-htmlForm-label">  id </label>
          <input
            type="text"
            name="id"
            id="id"
            className="htmlFormbold-htmlForm-input"
            value={myForm.values.id}  onChange={myForm.handleChange} 
          />
          {myForm.errors.id?<p>{myForm.errors.id}</p>:''}
        </div>

      <div className="htmlFormbold-input-flex">
        <div>
          <label htmlFor="name" className="htmlFormbold-htmlForm-label">
             name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="htmlFormbold-htmlForm-input"
            value={myForm.values.name}  onChange={myForm.handleChange} 
          />
           {myForm.errors.name?<p>{myForm.errors.name}</p>:''}
        </div>
      </div>
      <div className="htmlFormbold-input-flex">
        <div>
          <label htmlFor="userName" className="htmlFormbold-htmlForm-label">
            user name
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            className="htmlFormbold-htmlForm-input"  
             value={myForm.values.userName}  onChange={myForm.handleChange} 
             />
             {myForm.errors.userName?<p>{myForm.errors.userName}</p>:''}
        </div>
      </div>
      <div className="htmlFormbold-input-flex">
        
          <label htmlFor="email" className="htmlFormbold-htmlForm-label"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
            className="htmlFormbold-htmlForm-input"
            value={myForm.values.email}  onChange={myForm.handleChange} />
            {myForm.errors.email?<p>{myForm.errors.email}</p>:''}
        </div>
        <br />
      <div className="htmlFormbold-input-flex">
      <label htmlFor="address" className="htmlFormbold-htmlForm-label">
           Address:
        </label>
      <div >
        <label htmlFor="street" className="htmlFormbold-htmlForm-label">
          street 
        </label>
        <input
          type="text"
          name="street"
          id="street"
          className="htmlFormbold-htmlForm-input"
          value={myForm.values.street}  onChange={myForm.handleChange} />
          {myForm.errors.street?<p>{myForm.errors.street}</p>:''}
      </div>
      <div >
        <label htmlFor="city" className="htmlFormbold-htmlForm-label">
         city
        </label>
        <input
          type="text"
          name="city"
          id="city"
          className="htmlFormbold-htmlForm-input"
          value={myForm.values.city}  onChange={myForm.handleChange} />
          {myForm.errors.city?<p>{myForm.errors.city}</p>:''}
      </div>
      <div>
          <label htmlFor="zipcode" className="htmlFormbold-htmlForm-label">zipcode </label>
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            className="htmlFormbold-htmlForm-input"
            value={myForm.values.zipcode}  onChange={myForm.handleChange} />
            {myForm.errors.zipcode?<p>{myForm.errors.zipcode}</p>:''}
      </div>
      </div>
      <br />
      <div>
          <label htmlFor="phone" className="htmlFormbold-htmlForm-label"> Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="htmlFormbold-htmlForm-input"
            value={myForm.values.phone}  onChange={myForm.handleChange} />
            {myForm.errors.phone?<p>{myForm.errors.phone}</p>:''}
        </div>
      <div className="htmlFormbold-input-flex">
          <label htmlFor="website" className="htmlFormbold-htmlForm-label">Website </label>
          <input
            type="text"
            name="website"
            id="website"
            className="htmlFormbold-htmlForm-input"
            value={myForm.values.website}  onChange={myForm.handleChange} />
            {myForm.errors.website?<p>{myForm.errors.website}</p>:''}
        </div>
     <br />
     <div className="htmlFormbold-input-flex">
      <label htmlFor="company" className="htmlFormbold-htmlForm-label">
           Company:
        </label>
      <div >
        <label htmlFor="companyName" className="htmlFormbold-htmlForm-label">
          name 
        </label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          className="htmlFormbold-htmlForm-input"
          value={myForm.values.companyName}  onChange={myForm.handleChange} />
          {myForm.errors.companyName?<p>{myForm.errors.companyName}</p>:''}
      </div>
      <div >
        <label htmlFor="catchPhrase" className="htmlFormbold-htmlForm-label">
        catchPhrase 
        </label>
        <input
          type="text"
          name="catchPhrase"
          id="catchPhrase"
          className="htmlFormbold-htmlForm-input"
          value={myForm.values.catchPhrase}  onChange={myForm.handleChange} />
          {myForm.errors.catchPhrase?<p>{myForm.errors.catchPhrase}</p>:''}
      </div>
      <div>
          <label htmlFor="bs" className="htmlFormbold-htmlForm-label">bs </label>
          <input
            type="text"
            name="bs"
            id="bs"
            className="htmlFormbold-htmlForm-input"
            value={myForm.values.bs}  onChange={myForm.handleChange} />
            {myForm.errors.bs?<p>{myForm.errors.bs}</p>:''}
      </div>
      </div>
     

      <button  type="submit" className="htmlFormbold-btn">Register Now</button>
    
    </form>
    
  </div>
 </div>
 </div>
}
export default InsertUser;
