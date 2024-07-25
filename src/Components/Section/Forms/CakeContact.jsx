import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

const CakeContact = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [deleteItem, setDeleteItem] = useState(null);
    const [searchFilter, setSearchFilter] = useState("");

    useEffect(() => {
        const getResponse = async () => {
            try {
                // const response = await axios.get(" http://localhost:3004/formvalidation");
                const response = await axios.get("  https://669e04fe9a1bda3680050d24.mockapi.io/mathew/app/1/items");
               
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getResponse();
    }, []);

    const handleClickOpen = (item) => {
        setCurrentItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentItem(null);
        setDeleteItem(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentItem({ ...currentItem, [name]: value });
    };

    const handleUpdate = async () => {
        try {
            await axios.put(` https://669e04fe9a1bda3680050d24.mockapi.io/mathew/app/1/items/${currentItem.id}`, currentItem);
            console.log('Updated data', currentItem);
            handleClose();
            const response = await axios.get(" https://669e04fe9a1bda3680050d24.mockapi.io/mathew/app/1/items");
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`  https://669e04fe9a1bda3680050d24.mockapi.io/mathew/app/1/items/${deleteItem.id}`);
            console.log('Deleted item', deleteItem);
            handleClose();
            const response = await axios.get("  https://669e04fe9a1bda3680050d24.mockapi.io/mathew/app/1/items");
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleFilterChange = (event) => {
        setSearchFilter(event.target.value);
    }

    const filteredData = data.filter(item =>
        item.UserName.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.Email.toLowerCase().includes(searchFilter.toLowerCase())
    );

    return (
        <Fragment>
             
            <Grid container spacing={3} className="card-container">
            {/* <div className='searchcvf'> */}
                <TextField
                    label="Search by Name or Email"
                    placeholder='Search by Name or Email'
                    variant="outlined"
                    margin="normal"
                    value={searchFilter}
                    onChange={handleFilterChange}
                    fullWidth
                />
            {/* </div> */}
                {filteredData.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card className="card">
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {item.id}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {item.UserName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Address:</strong> {item.ADD}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Location:</strong> {item.Location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Flavour:</strong> {item.Flavour}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Date Required:</strong> {new Date(item.DateRequired).toLocaleDateString()}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Contact Number:</strong> {item.ContactNumber}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Email:</strong> {item.Email}
                                </Typography>
                                <div className='bttn'>
                                    <Button color="error" onClick={() => handleClickOpen(item)} sx={{textTransform:"none"}} variant='outlined'>
                                        Update
                                    </Button>
                                    <Button color="success" onClick={() => setDeleteItem(item)} sx={{textTransform:"none"}} variant='outlined'>
                                        Delete
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {currentItem && (
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Update Information</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Update the details for {currentItem.UserName}.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="UserName"
                            label="User Name"
                            type="text"
                            fullWidth
                            value={currentItem.UserName}
                            onChange={handleInputChange}
                        />
                        <TextField
                            margin="dense"
                            name="ADD"
                            label="Address"
                            type="text"
                            fullWidth
                            value={currentItem.ADD}
                            onChange={handleInputChange}
                        />
                        <TextField
                            margin="dense"
                            name="Location"
                            label="Location"
                            type="text"
                            fullWidth
                            value={currentItem.Location}
                            onChange={handleInputChange}
                        />
                        <TextField
                            margin="dense"
                            name="Flavour"
                            label="Flavour"
                            type="text"
                            fullWidth
                            value={currentItem.Flavour}
                            onChange={handleInputChange}
                        />
                        <TextField
                            margin="dense"
                            name="DateRequired"
                            label="Date Required"
                            type="date"
                            fullWidth
                            value={currentItem.DateRequired}
                            onChange={handleInputChange}
                        />
                        <TextField
                            margin="dense"
                            name="ContactNumber"
                            label="Contact Number"
                            type="text"
                            fullWidth
                            value={currentItem.ContactNumber}
                            onChange={handleInputChange}
                        />
                        <TextField
                            margin="dense"
                            name="Email"
                            label="Email"
                            type="email"
                            fullWidth
                            value={currentItem.Email}
                            onChange={handleInputChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" variant='outlined' sx={{textTransform:"none"}}>
                            Cancel
                        </Button>
                        <Button onClick={handleUpdate} color="warning" variant='outlined' sx={{textTransform:"none"}}>
                            Update
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
            {deleteItem && (
                <Dialog open={Boolean(deleteItem)} onClose={handleClose}>
                    <DialogTitle>Confirm Delete</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete {deleteItem.UserName}?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" sx={{textTransform:"none"}} variant='outlined'>
                            Cancel
                        </Button>
                        <Button onClick={handleDelete} color="success" sx={{textTransform:"none"}} variant='outlined'>
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Fragment>
    );
}

export default CakeContact;




// import React, { Fragment, useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card, CardContent, Typography, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

// const CakeContact = () => {
//     const [data, setData] = useState([]);
//     const [open, setOpen] = useState(false);
//     const [currentItem, setCurrentItem] = useState(null);
//     const [deleteItem, setDeleteItem] = useState(null);
//     const [searchFilter, setSearchFilter] = useState("");
//     const [foundItem, setFoundItem] = useState(null);

//     useEffect(() => {
//         const getResponse = async () => {
//             try {
//                 const response = await axios.get("http://localhost:3003/formvalidation");
//                 setData(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         getResponse();
//     }, []);

//     const handleClickOpen = (item) => {
//         setCurrentItem(item);
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//         setCurrentItem(null);
//         setDeleteItem(null);
//         setFoundItem(null);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setCurrentItem({ ...currentItem, [name]: value });
//     };

//     const handleUpdate = async () => {
//         try {
//             await axios.put(`http://localhost:3003/formvalidation/${currentItem.id}`, currentItem);
//             console.log('Updated data', currentItem);
//             handleClose();
//             const response = await axios.get("http://localhost:3003/formvalidation");
//             setData(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleDelete = async () => {
//         try {
//             await axios.delete(`http://localhost:3003/formvalidation/${deleteItem.id}`);
//             console.log('Deleted item', deleteItem);
//             handleClose();
//             const response = await axios.get("http://localhost:3003/formvalidation");
//             setData(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleFilterChange = (event) => {
//         setSearchFilter(event.target.value);
//     };

//     const handleFind = () => {
//         const item = data.find(item =>
//             item.UserName.toLowerCase().includes(searchFilter.toLowerCase()) ||
//             item.Email.toLowerCase().includes(searchFilter.toLowerCase())
//         );
//         setFoundItem(item);
//     };

//     const filteredData = data.filter(item =>
//         item.UserName.toLowerCase().includes(searchFilter.toLowerCase()) ||
//         item.Email.toLowerCase().includes(searchFilter.toLowerCase())
//     );

//     return (
//         <Fragment>
//             <div className='search'>
//                 <TextField
//                     label="Search by Name or Email"
//                     variant="outlined"
//                     margin="normal"
//                     value={searchFilter}
//                     onChange={handleFilterChange}
//                     fullWidth
//                 />
//                 <Button variant="contained" color="primary" onClick={handleFind} sx={{ marginTop: '10px', textTransform: "none" }}>
//                     Find
//                 </Button>
//             </div>
//             <Grid container spacing={3} className="card-container">
//                 {(foundItem ? [foundItem] : filteredData).map((item) => (
//                     <Grid item xs={12} sm={6} md={4} key={item.id}>
//                         <Card className="card">
//                             <CardContent>
//                                 <Typography variant="h6" component="div">
//                                     {item.id}
//                                 </Typography>
//                                 <Typography variant="h6" component="div">
//                                     {item.UserName}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Address:</strong> {item.ADD}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Location:</strong> {item.Location}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Flavour:</strong> {item.Flavour}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Date Required:</strong> {new Date(item.DateRequired).toLocaleDateString()}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Contact Number:</strong> {item.ContactNumber}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Email:</strong> {item.Email}
//                                 </Typography>
//                                 <div className='bttn'>
//                                     <Button color="error" onClick={() => handleClickOpen(item)} sx={{ textTransform: "none" }} variant='outlined'>
//                                         Update
//                                     </Button>
//                                     <Button color="success" onClick={() => setDeleteItem(item)} sx={{ textTransform: "none" }} variant='outlined'>
//                                         Delete
//                                     </Button>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>

//             {currentItem && (
//                 <Dialog open={open} onClose={handleClose}>
//                     <DialogTitle>Update Information</DialogTitle>
//                     <DialogContent>
//                         <DialogContentText>
//                             Update the details for {currentItem.UserName}.
//                         </DialogContentText>
//                         <TextField
//                             autoFocus
//                             margin="dense"
//                             name="UserName"
//                             label="User Name"
//                             type="text"
//                             fullWidth
//                             value={currentItem.UserName}
//                             onChange={handleInputChange}
//                         />
//                         <TextField
//                             margin="dense"
//                             name="ADD"
//                             label="Address"
//                             type="text"
//                             fullWidth
//                             value={currentItem.ADD}
//                             onChange={handleInputChange}
//                         />
//                         <TextField
//                             margin="dense"
//                             name="Location"
//                             label="Location"
//                             type="text"
//                             fullWidth
//                             value={currentItem.Location}
//                             onChange={handleInputChange}
//                         />
//                         <TextField
//                             margin="dense"
//                             name="Flavour"
//                             label="Flavour"
//                             type="text"
//                             fullWidth
//                             value={currentItem.Flavour}
//                             onChange={handleInputChange}
//                         />
//                         <TextField
//                             margin="dense"
//                             name="DateRequired"
//                             label="Date Required"
//                             type="date"
//                             fullWidth
//                             value={currentItem.DateRequired}
//                             onChange={handleInputChange}
//                         />
//                         <TextField
//                             margin="dense"
//                             name="ContactNumber"
//                             label="Contact Number"
//                             type="text"
//                             fullWidth
//                             value={currentItem.ContactNumber}
//                             onChange={handleInputChange}
//                         />
//                         <TextField
//                             margin="dense"
//                             name="Email"
//                             label="Email"
//                             type="email"
//                             fullWidth
//                             value={currentItem.Email}
//                             onChange={handleInputChange}
//                         />
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={handleClose} color="primary" variant='outlined' sx={{ textTransform: "none" }}>
//                             Cancel
//                         </Button>
//                         <Button onClick={handleUpdate} color="warning" variant='outlined' sx={{ textTransform: "none" }}>
//                             Update
//                         </Button>
//                     </DialogActions>
//                 </Dialog>
//             )}
//             {deleteItem && (
//                 <Dialog open={Boolean(deleteItem)} onClose={handleClose}>
//                     <DialogTitle>Confirm Delete</DialogTitle>
//                     <DialogContent>
//                         <DialogContentText>
//                             Are you sure you want to delete {deleteItem.UserName}?
//                         </DialogContentText>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={handleClose} color="primary" sx={{ textTransform: "none" }} variant='outlined'>
//                             Cancel
//                         </Button>
//                         <Button onClick={handleDelete} color="success" sx={{ textTransform: "none" }} variant='outlined'>
//                             Delete
//                         </Button>
//                     </DialogActions>
//                 </Dialog>
//             )}
//         </Fragment>
//     );
// }

// export default CakeContact;
