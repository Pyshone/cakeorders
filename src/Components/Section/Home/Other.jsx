import React, { useEffect, useState } from 'react';
import { Container, Typography ,Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Other = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const localData = localStorage.getItem("userData");
    if (localData) {
      setUserData(JSON.parse(localData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate('/validate');
  };

  return (
    <div className="outer-container">
      <Container maxWidth={"md"} className="token-container">
        <h3>Register Successfully</h3>
        <h2>Your Data</h2>
        {userData ? (
          <div className="token-Cosdfghntainer">
            <Typography variant="body1" className="token-text"><strong>Username:</strong> {userData.username}</Typography>
            <Typography variant="body1" className="token-text"><strong>First Name:</strong> {userData.firstName}</Typography>
            <Typography variant="body1" className="token-text"><strong>Last Name:</strong> {userData.lastName}</Typography>
            <Typography variant="body1" className="token-text"><strong>Email:</strong> {userData.email}</Typography>
            <Typography variant="body1" className="token-text"><strong>ID:</strong> {userData.id}</Typography>
            <Typography variant="body1" className="token-text"><strong>Gender:</strong> {userData.gender}</Typography>
            <Typography variant="body1" className="token-text"><strong>Image:</strong> {userData.image}</Typography>
            <div className="image-container">
            <img src={userData.image} className="token-img" />
            </div>
            <Typography variant="body1" className="token-text"><strong>Token:</strong> {userData.token}</Typography>
            <Button variant="contained" onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <Typography variant="body1" className="no-data-text">No data found</Typography>
        )}
      </Container>
    </div>
  );
}

export default Other;
