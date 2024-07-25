import { Button } from '@mui/material'
import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()


    const onSubmit = (data) => {
        console.log(data, 'data')
        // alert(JSON.stringify(data)); 
    };

const navigate = useNavigate()

    const onclick = (()=>{
        navigate('/registartion')
    })

  return (
    <Fragment>
    <div>
      <h1>Login</h1>
      <input placeholder='ENTER YOUR NAME'  required/>
      <input placeholder='ENTER YOUR LAST-NAME'  required/>
      <input placeholder='ENTER YOUR MOBILE NUMBER'  required/>
      <input placeholder='ENTER YOUR MAIL ID'  required/>
      <Button onClick={onclick} variant='contained'>Submit</Button>
    </div>

<hr/>
    {/* useForms */}
    <div className='newenters'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>FirstName</label>
            <input {...register("firstname")}  required  />
            <label>LastName</label>
            <input {...register("lastname",{required:true})}  required /> 
            <label>PhoneNumber</label>
            <input type='password
            ' {...register("phonenumber", { required: true, minLength: 10, maxLength:10 })} required />
            <label>Email id</label>
            <input type='email' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} required/>
            {errors.email && <span>This field is required and must be a valid email address.</span>}
            <Button type='submit' variant='outlined' >Submit</Button>
        </form>
    </div>
    </Fragment>
  )
}

export default Login
