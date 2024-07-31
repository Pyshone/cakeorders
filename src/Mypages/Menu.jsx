// import React, { Fragment, useState, useEffect } from 'react'

// const Menu = () => {
//   const [Table, setTable] = useState([])

//   useEffect(() => {
//     const getResponse = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/users')
//         const data = await response.json()
//         setTable(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }

//     getResponse()
//   }, [])

//   return (
//     <Fragment>
//       <div>
//         <table style={{ width: '100%' }}>
//           <thead>
//             <tr>
//               <th align='left'>ID</th>
//               <th align='left'>FIRST NAME</th>
//               <th align='left'>LAST NAME</th>
//               <th align='left'>MIDDLE NAME</th>
//               <th align='left'>AGE</th>
//               <th align='left'>GENDER</th>
//               <th align='left'>EMAIL</th>
//               <th align='left' >PHONE</th>
//               <th align='left'>USER NAME</th>
//               <th align='left'>PASSWORD</th>
//               <th align='left'>BIRTHDATE</th>
//               <th align='left'>IMAGE</th>
//               <th align='left'>BLOOD GROUP</th>
//               <th align='left'>height</th>
//               <th align='left'>weight</th>
//               <th align='left'>EyeColor</th>
//               <th align='left'>HAIR COLOR</th>
//               <th align='left'>HAIR TYPE</th>
//               <th align='left'>IP</th>
//               <th align='left'>ADDRESS</th>
//               <th align='left'>city</th>
//               <th align='left'>state</th>
//               <th align='left'>stateCode</th>
//               <th align='left'>postalCode</th>
//               <th align='left'>lat</th>
//               <th align='left'>lNG</th>
//               <th align='left'>COUNTRY</th>
//               <th align='left'>MAC ADDRESS</th>
//               <th align='left'>UNIVRTSITY</th>
//               <th align='left'>COMPANY ADDRESS</th>
//               <th align='left'>COMPANY-city</th>
//               <th align='left'>COMPANY-state</th>
//               <th align='left'>COMPANY-stateCode</th>
//               <th align='left'>COMPANY-postalCode</th>
//               <th align='left'>COMPANY-COOR-lat</th>
//               <th align='left'>COMPANY-COOR-lNG</th>
//               <th align='left'>COUNTRY</th>

//             </tr>
//           </thead>
//           <tbody>
//             {Table.users?.map((hi) => (
//               <tr key={hi.id}>
//                 <td>
//                   {hi.id}
//                   {/* <img src={hi.image} style={{ width: 50, height: 50 }} /> */}
//                 </td>
//                 <td>{hi.firstName}</td>
//                 <td>{hi.lastName}</td>
//                 <td>{hi.maidenName}</td>
//                 <td>{hi.age}</td>
//                 <td>{hi.gender}</td>
//                 <td>{hi.email}</td>
//                 <td>{hi.phone}</td>
//                 <td>{hi.username}</td>
//                 <td>{hi.password}</td>
//                 <td>{hi.birthDate}</td>
//                 <td>
//                   <img src={hi.image} alt='' style={{ width: 50, height: 50 }} />
//                 </td>
//                 <td>{hi.bloodGroup}</td>
//                 <td>{hi.height}</td>
//                 <td>{hi.weight}</td>
//                 <td>{hi.eyeColor}</td>
//                 <td>{hi.hair.color}</td>
//                 <td>{hi.hair.type}</td>
//                 <td>{hi.ip}</td>
//                 <td>{hi.address.address}</td>
//                 <td>{hi.address?.city}</td>
//                 <td>{hi.address?.state}</td>
//                 <td>{hi.address?.stateCode}</td>
//                 <td>{hi.address?.postalCode}</td>
//                 <td>{hi.address?.coordinates.lat}</td>
//                 <td>{hi.address?.coordinates.lng}</td>
//                 <td>{hi.address.country}</td>
//                 <td>{hi.macAddress}</td>
//                 <td>{hi.university}</td>
//                 {/* <td>{hi.bank}</td> */}
//                 {/* <td>{hi.company}</td> */}
//                 <td>{hi.company.address.address}</td>
//                 <td>{hi.company?.address.city}</td>
//                 <td>{hi.company?.address.state}</td>
//                 <td>{hi.company?.address.stateCode}</td>
//                 <td>{hi.company?.address.postalCode}</td>
//                 <td>{hi.company?.address.coordinates.lat}</td>
//                 <td>{hi.company?.address.coordinates.lng}</td>
//                 <td>{hi.company.address.country}</td>

//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </Fragment>
//   )
// }

// export default Menu
