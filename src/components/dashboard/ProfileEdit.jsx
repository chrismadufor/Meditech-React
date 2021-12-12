import React, {useState, useEffect} from 'react'
import TopNav from './layouts/TopNav'
import Editcss from '../styles/profile.module.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { updateUserDetails } from '../../theStore/actions'

import {  useNavigate } from 'react-router-dom'



function ProfileEdit() {
  const user = useSelector(state => state.authReducer.userDetails)
  let navigate =  useNavigate();
  let dispatch = useDispatch();

  // const [info, setInfo] = useState({})
  const [src, setSrc] = useState(false)
  const [image, setImage] = useState('')

  

 const putUserInfo =  (values) => {
   
  const token = localStorage.getItem('token');
  const config = {
    headers : {
        Authorization : 'Bearer ' + token
    }
}
   axios.put('https://meditech-hospital-app.herokuapp.com/users/update ', values, config)
    .then (res => {

      console.log(values)
      if(res.data.message){
        axios.get('https://meditech-hospital-app.herokuapp.com/users/profile'
          , config)
          .then(res=>{

            dispatch(updateUserDetails(res.data))
            // setLoading(false)
            navigate('/dashboard/profile')

            console.log(res)
          })
      }
    }) 
    .catch (err => console.log(err))
}
const validate = Yup.object({
  fullName: Yup.string()
  .required('Name  required'),
  email: Yup.string()
  .email('Email is invalid')
  .required('Email  required'),
  hospitalId: Yup.string()
  .required('Hospital Id  required'),
  phone: Yup.number()
  .required('Number  required'),
  dateOfBirth: Yup.string()
  .required('Date of Birth  required'),
  nationality: Yup.string()
  .required('Nationality  required'),
  city: Yup.string()
  .required('City  required'),
  address: Yup.string()
  .required('Address  required'),
  
})

const pictureUpload = async (e)=> {
  const files= e.target.files
 const formData = new FormData()
 formData.append('file', files[0])
  formData.append('upload_preset', 'ml_default')
  setSrc(true)
  axios.post('https://api.cloudinary.com/v1_1/dneoru6bp/image/upload', formData)
  .then((res)=>{
  console.log(res)
   setImage(res.data.secure_url)

    setSrc(false)
  })
};

  useEffect(() => {
    
    
  }, [user])

    return (
      <div className={Editcss.main}>
        <TopNav name= 'Profile Edit'/>
        <div className={Editcss.mainContent}>
          <div className={Editcss.mainContentWrap}>
             
          <div className={Editcss.modal} >


          <Formik
        initialValues={
         {fullName:user.fullName,
          email: user.email,
          hospitalId:user.hospitalId,
          phone: user.phone,
          dateOfBirth: user.dateOfBirth,
          nationality: user.nationality,
          city: user.city,
          address: user.address,
           }}

     
      validationSchema = {validate}

       onSubmit={(values, { setSubmitting }) => {
         console.log('hello world')
        const data = {
          profilePhoto: image,
          fullName: values.fullName,
          email: values.email,
          hospitalId:values.hospitalId,
          phone:values.phone,
          dateOfBirth: values.dateOfBirth,
          nationality: values.nationality,
          city: values.city,
          address:values.address,
        }
        
        putUserInfo(data)
       setSubmitting(false);
     
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         
       }) => (
         <form className={Editcss.editForm} onSubmit={handleSubmit}>
           <div className={Editcss.formTitle}>
            <h2>Edit Profile</h2>
          </div>
          <div className={Editcss.imgWrap}>
            <div className={Editcss.imgPreview}>
              {src? (
                ''):(
                  <img className={Editcss.editProfileImg} src={image} alt="" />
                )
              }

              
            </div>
            <input type="file" name="profile-image" id="patient-image" onChange={pictureUpload}className={Editcss.file} />
          </div>

          <div className={Editcss.inputWrap}>
            <div className={Editcss.formInput}>
              <label for="full-name"> Full Name</label>
              <input
                type="text"
                name="fullName"
                onChange={handleChange}
                onBlur={handleBlur}
                id="patient-name"
                placeholder="Enter your name"
               value={values.fullName}

              />
             <div style={{color:"red"}}>  
             {errors.fullName && touched.fullName && errors.fullName}
             </div>

            </div>
            <div className={Editcss.formInput}>
              <label for="patient-email">Email</label>
              <input
               type="email"
               name="email"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.email}
               id="patient-email"
               placeholder="Enter your email"
              />
              <div style={{color:"red"}}>  
           {errors.email && touched.email && errors.email}
           </div>

            </div>
            <div className={Editcss.formInput}>
              <label for="patient-id">Hospital ID</label>
              <input
               type="text" 
               id="patient-id"
               name="hospitalId"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.hospitalId}
               placeholder="Enter your Hospital Id"

                />
                <div style={{color:"red"}}>  
                {errors.hospitalId && touched.hospitalId && errors.hospitalId}
                </div>

            </div>
            <div className={Editcss.formInput}>
              <label for="patient-phone">Phone Number</label>
              <input
                type="number"
                id="patient-phone"
                name="phone"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.phone}
                placeholder="Enter your phone number"
              />
              <div style={{color:"red"}}>  
           {errors.phone && touched.phone && errors.phone}
           </div>

            </div>
            <div className={Editcss.formInput}>
              <label for="patient-dob">Date of birth</label>
              <input
                type="text"
                id="patient-dob"
                name="dateOfBirth"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.dateOfBirth}
                placeholder="Enter your date of birth"
              />
              <div style={{color:"red"}}>  
           {errors.dateOfBirth && touched.dateOfBirth && errors.dateOfBirth}
           </div>

            </div>
            <div className={Editcss.formInput}>
              <label for="patient-nationality">Nationality</label>
              <input
                type="text"
                id="patient-nationality"
                name="nationality"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nationality}
                placeholder="Enter your nationality"
              />
              <div style={{color:"red"}}>  
           {errors.nationality && touched.nationality && errors.nationality}
           </div>

            </div>
            <div className={Editcss.formInput}>
              <label for="patient-city">City</label>
              <input
                type="text"
                id="patient-city"
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
                placeholder="Enter your city"
              />
              <div style={{color:"red"}}>  
           {errors.city && touched.city && errors.city}
           </div>

            </div>
            <div className={Editcss.formInput}>
              <label for="patient-address">Address</label>
              <input
                type="text"
                id="patient-address"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                placeholder="Enter your address"
              />
              <div style={{color:"red"}}>  
           {errors.address && touched.address && errors.address}
           </div>

            </div>
          </div>
          
           <button type="submit" disabled={isSubmitting} 
            value="UPDATE PROFILE"
            
            className={Editcss.submitForm}
            id="submit-form">
             Submit
           </button>
         </form>
       )}
     </Formik>



      
    </div>
    </div>
    </div>
  
      </div>

      
    )
}

export default ProfileEdit

