// import { useEffect, useState } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import { useData } from "./Data";
// import { Link, Navigate } from "react-router-dom";
// import data from './Data';


// const Delete = () => {
//     const { userId } = useParams();

//     const [user, setUser] = useState({
//         name: "",
//         email: "",
//         age: "",
//         city: "",
//       });


//     useEffect(() => {
//         const newUser = data.find((obj) => obj.id.toString() === userId.toString())
//         if(newUser) {
//           setUser(newUser);
//         }
//       }, []);


//     return (
//         <div>
//           <h2>Delete</h2>
//             <p>Are you sure you want to delete this user?</p>
//             <p>Name: {user.name}</p>
//             <p>Email: {user.email}</p>
//             <p>Age: {user.age}</p>
//             <p>City: {user.city}</p>
//             <br/>
//             <button>Delete</button>
//             <br/>
//             <Link to="/user-management">
//               <button>Cancel</button>
//             </Link>

//           </div>
       
//       );
// }
// export default Delete;


// import React, { useEffect, useState } from "react";
// import { useParams, Link, useHistory } from "react-router-dom";
// import data from "./Data";

// const Delete = () => {
//   const { userId } = useParams();
  

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     age: "",
//     city: ""
//   });

//   useEffect(() => {
//     const newUser = data.find((obj) => obj.id.toString() === userId.toString());
//     if (newUser) {
//       setUser(newUser);
//     }
//   }, [userId]);
  


//   const handleDelete = () => {
//     // Perform deletion logic here
//     // You can use any method you prefer to delete the user data
//     // For demonstration purposes, I'll just remove it from the data array
//     // Replace this with your actual deletion logic
//     const updatedData = data.filter((obj) => obj.id.toString() !== userId.toString());
//     // Assuming you have some method to update your data, update it here
//     // updateData(updatedData);

//     // Show confirmation message
//     alert("User deleted successfully.");
//     console.log(user);

    

//     // Redirect to user-management page}

//   if (!user) {
//     return <div>User not found</div>;
//   };
// }


//   return (
//     <div>
//       <h2 className="add-user">Delete</h2>
//       <p>Are you sure you want to delete this user?</p>
//             <table className="check">
//         <thead>
//           <tr>
//             <th>User Info</th>
//             <th>Data</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Name:</td>
//             <td>{user.name}</td>
//           </tr>
//           <tr>
//             <td>Email:</td>
//             <td>{user.email}</td>
//           </tr>
//           <tr>
//             <td>Age:</td>
//             <td>{user.age}</td>
//           </tr>
//           <tr>
//             <td>City:</td>
//             <td>{user.city}</td>
//           </tr>
//           <tr>
//             <td>Action:</td>
//             <td>
//             <button onClick={handleDelete} className="btn btn-danger">Delete</button>
//               <Link to="/user-management">
//               <button className="btn btn-detail">Cancel</button>
//             </Link>
//             </td>
//           </tr>
//         </tbody>
//       </table>

//     </div>
//   );
// };

// export default Delete;



// Delete.js

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import data from "./Data";

const UserDelete = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
  });

  useEffect(() => {
    const newUser = data.find((obj) => obj.id.toString() === userId.toString())
    if(newUser) {
      setUser(newUser);
    }
  }, []);

  return (
    <div>
      <h2>Are you sure want delete this data?</h2>

      <table className="check">
         <thead>
           <tr>
             <th>User Info</th>
             <th>Data</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>Name:</td>
             <td>{user.name}</td>
           </tr>
           <tr>
             <td>Email:</td>
             <td>{user.email}</td>
           </tr>
           <tr>
             <td>Age:</td>
             <td>{user.age}</td>
           </tr>
           <tr>
             <td>City:</td>
             <td>{user.city}</td>
           </tr>
           <tr>
             <td>Action:</td>
             <td>
             <button 
          type="button" 
          className="btn btn-danger"
          onClick={() => {
            navigate('/user-management');
          }}

          >Delete</button>
        <button 
          type="button" 
          className="btn"
          onClick={() => {
            navigate('/user-management');
          }}
          >Cancel</button>
             </td>
           </tr>
         </tbody>
       </table>


      
     
    </div>
  )
}

export default UserDelete;