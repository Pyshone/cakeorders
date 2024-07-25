import React, { Fragment, useState } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Container, Divider, TextField, CircularProgress, Grid, Avatar } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from 'axios';
import cake from'../../../Assets/images/cake.1.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
// import './Contact.css'; // Assuming you have a CSS file for additional styles

const schema = yup.object().shape({
    UserName: yup.string().required("Name is required"),
    Email: yup.string().required("Email is required").email("Email is not valid"),
    ContactNumber: yup.string()
        .required("Contact Number is required")
        .matches(/^\d{10}$/, 'Contact Number must be exactly 10 digits'),
    DateRequired: yup.date().required("Date is required"),
    Flavour: yup.string().required("Flavour is required"),
    Location: yup.string().required("This field is required"),
    ADD: yup.string().required("This field is required"),
}).required();

const Contact = () => {
    const navigate = useNavigate ()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data) => {
        setLoading(true);
        setError('');
        try {
            await axios.post('  https://669e04fe9a1bda3680050d24.mockapi.io/mathew/app/1/items', data, {
                headers: { 'Content-Type': 'application/json' }
            });
            setLoading(false);
            toast.success("Successfully! Your order is registered", { position: "bottom-center" });
            setTimeout(() => {
                navigate('/orderlist');
              }, 1000);
        } catch (err) {
            setLoading(false);
            toast.error('An error occurred during registration. Please try again.');
        }
    };

    return (
        <Fragment>
            <ToastContainer />
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <Container maxWidth="lg">
                        <div className="cakecontain">
                            <div>
                                <h2>Create a Cake</h2>
                                <p>Describe your dream cake and we will create it for you!</p>
                            </div>
                            <div>
                                {/* <img src={cake} alt="cake" className='cakeimg' />    */}
                                <Avatar src={cake} sx={{height:150,width:150 }} />
                                {/* <Avatar src={cake}  className='cakeimg' /> */}
                            </div>
                        </div>
                        <Divider />
                        <Grid container spacing={2} marginTop={"20px"}>
                            <Grid item xs={12} sm={6}>
                                <label>Name</label>
                                <TextField
                                    placeholder="Enter Name"
                                    {...register("UserName")}
                                    fullWidth
                                    className="input-field"
                                />
                                <p className="error">{errors.UserName?.message}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label>Email</label>
                                <TextField
                                    placeholder="Enter Email"
                                    {...register("Email")}
                                    fullWidth
                                    className="input-field"
                                />
                                <p className="error">{errors.Email?.message}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label>Contact Number</label>
                                <TextField
                                    placeholder="Enter Contact Number"
                                    {...register("ContactNumber")}
                                    fullWidth
                                    className="input-field"
                                />
                                <p className="error">{errors.ContactNumber?.message}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label>Date Required</label>
                                <TextField
                                    type="date"
                                    {...register("DateRequired")}
                                    fullWidth
                                    className="input-field"
                                />
                                <p className="error">{errors.DateRequired?.message}</p>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container spacing={2}  marginTop={"20px"}>
                            <Grid item xs={12} sm={6}>
                                <label>Flavour</label>
                                <TextField
                                    placeholder="Please Select"
                                    {...register("Flavour")}
                                    fullWidth
                                    className="input-field"
                                />
                                <p className="error">{errors.Flavour?.message}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label>Delivery Location</label>
                                <TextField
                                    placeholder="Enter Correct Location"
                                    {...register("Location")}
                                    fullWidth
                                    className="input-field"
                                />
                                <p className="error">{errors.Location?.message}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <label>Additional Details</label>
                                <TextField
                                    placeholder="Additional Details"
                                    {...register("ADD")}
                                    fullWidth
                                    className="input-field"
                                />
                                <p className="error">{errors.ADD?.message}</p>
                            </Grid>
                        </Grid>
                        <div>
                            {error && <p className="error">{error}</p>}
                            <Button sx={{textTransform:"none"}}
                                variant="outlined"
                                color="primary"
                                type="submit"
                                className="submit-btn"
                                loading={loading}
                            >
                                {loading ? <CircularProgress size={24} /> : "Click :)"}
                            </Button>
                        </div>
                    </Container>
                </form>
            </div>
        </Fragment>
    );
};

export default Contact;
