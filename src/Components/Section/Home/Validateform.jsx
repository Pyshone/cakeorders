import React, { Fragment, useState,Suspense,lazy} from 'react';
import { Button, Container, Divider, TextField,CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  UserName: yup.string().required("Name is Required"),
  Password: yup.string()
    .required("Password is Required")
    .min(3, 'Password must be at least 3 characters long')
    .max(15, 'Password must be at most 15 characters long'),

}).required();

const Validateform = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });



  
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: data.UserName,
          password: data.Password,
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Wrong username or password' );
      }

      const result = await response.json();
      if (result.token) {
        localStorage.setItem("userData", JSON.stringify(result));
        toast.success("Registration successful!", {
          position: 'top-right',
        });
        setTimeout(() => {
          navigate('/other');
        }, 1000);
      }
    } catch (error) {
      setError(error.message || 'Wrong username or password');
      toast.error('Wrong username or password', {
        position: 'bottom-right',
      });
    }
    finally {
      setLoading(false); 
    }
  };


  return (
    <Fragment>
       <ToastContainer />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container maxWidth={"md"} className="container">
            <h2>New Registration</h2>
            <Divider />
            <div>
              <label>Name</label>
            </div>
            <TextField placeholder="Enter Name" {...register("UserName")} />
            <p className="error">{errors.UserName?.message}</p>
            <div className="pass">
              <label>Password</label>
            </div>
            <TextField type="password" placeholder="Enter Password" {...register("Password")} />
            <p className="error">{errors.Password?.message}</p>
            <div>
            {error && <p className="error">{error}</p>}
              <Button variant="contained" color='success' type="submit" className='submitbtn'  loading={loading}>
              {loading ? <CircularProgress size={24} /> : "Register"}
              </Button>
              <p style={{fontSize:"5px"}}>0lelplR</p>
            </div>
          </Container>
        </form>
      </div>
    </Fragment>
  );
}

export default Validateform;
