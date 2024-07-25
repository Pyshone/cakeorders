import React, { Fragment, useEffect, useState } from 'react'
import {useNavigate,useLocation } from 'react-router-dom'








const Postproduct = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // const [user, setUser] = useState(location.state ? location.state.user : null);
  // const [users, setUsers] = useState([])
  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newWebsite, setNewWebsite] = useState("")


  // useEffect(() => {
  //   if (user) {
  //     const { name, email, website } = user;
  //     setNewName(name);
  //     setNewEmail(email);
  //     setNewWebsite(website);
  //   }
  // }, [user]);


  const handleName = (e) => {
    setNewName(e.target.value);
  };
  const handleNum = (e) => {
    setNewEmail(e.target.value);
  };
  const handlemail = (e) => {
    setNewWebsite(e.target.value);
  };




  const addUser = () => {
    navigate('/Addproduct')
    const name = newName.trim()
    const email = newEmail.trim()
    const website = newWebsite.trim()
    if (name && email && website) {
      fetch("http://localhost:3002/manage", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          website,
        }),
        headers: {
          "Content-type": "application/json"
        },
      })
      // .then(response => response.json())
      // .then(data => {
      //   setUsers([...users, data])
      //   setNewName("")
      //   setNewEmail("")
      //   setNewWebsite("")
      // })
    }
  }





  return (
    <Fragment>

      <div className="container">
      {/* {user ? ( */}
        <form className='form-intro'>

          <input
            value={newName}
            onChange={handleName}
            placeholder="Add name here..."
            required
          />


          <input
            placeholder="Add Mail id here..."
            value={newEmail}
            onChange={handleNum}
            required
          />

          <input
            placeholder="phone "
            value={newWebsite}
            onChange={handlemail}
            required
          />

          <button intent="success" onClick={addUser}>
            ADD USER
          </button>
        </form>
      {/* //      ) : (
      //       <p>User not found!</p>
      // )} */}
      </div>
    </Fragment>
  )
}

export default Postproduct
