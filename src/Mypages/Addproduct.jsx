
// import React, { Fragment, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';



// const Addproduct = () => {
//     const navigate = useNavigate();
//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     fetch("http://localhost:3002/manage")
//       .then(response => response.json())
//       .then(json => setUsers(json))
//   }, [])




//   const deleteUser = id => {
//     fetch(`http://localhost:3002/manage/${id}`, {
//       method: "DELETE",
//     })
//       .then(response => response.json())
//       .then(() => {
//         setUsers(values => {
//           return values.filter(item => item.id !== id)
//         })
//         alert("User deleted successfully")
//         // AppToaster.show({
//         //   message: "User deleted successfully",
//         //   intent: "success",
//         //   timeout: 3000,
//         // })
//       })
//   }

//   const updateUser = id => {
    
//     // fetch(`http://localhost:3002/manage/${id}`, {
//     //   method: "PUT",
//     //   body: JSON.stringify(users),
//     //   headers: {
//     //     "Content-type": "application/json",
//     //   },
//     // })
//     //   .then(response => response.json())
//     //   .then(() => {
//     //    alert(
//     //        "User updated successfully",
//     //       "success",
//     //        3000,
//     //     )
//     //   }) {/* <Router>
//     //     <Routes>
//     //     <Route exact path='/' element={<Postproduct />}></Route>
//     //     <Route exact path='/Addproduct' element={<Addproduct />}></Route>
//     //     <Route path="/edit" element={<Postproduct />} />
//     //   </Routes>
//     // </Router> */}

//       const userToUpdate = users.find(user => user.id === id);
//       if (userToUpdate) {
//         // User exists in the list, navigate to edit route
//         navigate('/edit', { state: { user: userToUpdate } });
//       } else {
//         // User does not exist in the list, handle accordingly (e.g., show error)
//         alert("User not found for editing");
//       }
//   }



//   return (
//    <Fragment>
//      <div>
//         <table >
//         <thead>
//           <tr className='tablehead'>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>phone</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.website}</td>
//               <td className="edit-delete-cell">
//                     <>
//                         <button className="edit-button" onClick={() => updateUser(user.id)}>EDIT</button>
//                         <button  className="delete-button" onClick={() => deleteUser(user.id)}>DELETE</button>
//                     </>
//                 </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//         </div>
//    </Fragment>
//   )
// }

// export default Addproduct
