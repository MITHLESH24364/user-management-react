
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUserData } from "./Data";


 

const AddUser = () => {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  // const [city, setCity] = useState('');
  const Navigate = useNavigate();

  const [users, setUsers] = useState({
    username: '',
    email: '',
    age: '',
    city: ''
  });


  
  const handleUsernameChange = (event) => {
    setUsers({...users, username: event.target.value})
  }
  const handleEmailChange = (event) => {
    setUsers({...users, email: event.target.value})
  }
  const handleAgeChange = (event) => {
      setUsers({...users, age: event.target.value})
  }
  const handleCityChange = (event) => {
      setUsers({...users, city: event.target.value})
  }
  
  
  
    const saveForm = () => {
    console.log('save form');
    console.log('user ',users );
    Navigate('/user-management');
  }
  return (
    <div>
      { <h2 className="add-user">Add User</h2>
   
      }
 
        <div class="container">
        <div class="text"></div>
        <form action="" method="">
            <div class="form-row">
                <div class="input-data">
                    <input type="text"  id="fullname" name="fullname"  onChange={handleUsernameChange} value={users.username} required />
                    <div class="underline"></div>
                    <label for="">Enter Your Username</label>
                </div>
                <div class="input-data">
                    <input type="email"  id="email" name="email" value={users.email} onChange={handleEmailChange} required />
                    <div class="underline"></div>
                    <label for="">Enter Your Email Address</label>
                </div>
            </div>
            <div class="form-row">
            <div class="input-data">
                    <input type="number"  id="number" name="number" value={users.age} onChange={handleAgeChange}  required />
                    <div class="underline"></div>
                    <label for="">Enter Your Age</label>
                </div>
                <div class="input-data">
                    <input type="text"  id="address" name="address"  value={users.city} onChange={handleCityChange}required />
                    <div class="underline"></div>
                    <label for="">Enter Your City</label>
                </div>
            </div>
            <div class="form-row">
                <div class="input-data textarea">
                    <div class="form-row submit-btn">
                        <div class="input-data">
                            <button className="btn" onClick={saveForm}>Save</button>

                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

     
     
    </div>
  );
}

export default AddUser;









// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { addUser } from './Data';

// const AddUser = () => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     username: '',
//     email: '',
//     age: '',
//     city: ''
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUser({ ...user, [name]: value });
//     console.log('User:', user);
//   };

//   const saveForm = () => {
//     addUser(user);
//     navigate('/user-management');
//   };

//   return (
//     <div>
//       <h2 className="add-user">Add User</h2>
//       <div className="container">
//         <div className="text"></div>
//         <form>
          
//              <div className="form-row">
//                           <div className="input-data">
//                             <input type="text" name="username" onChange={handleInputChange} value={user.username} required />
//                             <div className="underline"></div>
//                             <label htmlFor="">Enter Your Username</label>
//                           </div>
//                           <div className="input-data">
//                             <input type="email" name="email" value={user.email} onChange={handleInputChange} required />
//                             <div className="underline"></div>
//                             <label htmlFor="">Enter Your Email Address</label>
//                           </div>
//                         </div>
//                         <div className="form-row">
//                           <div className="input-data">
//                             <input type="number" name="age" value={user.age} onChange={handleInputChange} required />
//                             <div className="underline"></div>
//                             <label htmlFor="">Enter Your Age</label>
//                           </div>
//                           <div className="input-data">
//                             <input type="text" name="city" value={user.city} onChange={handleInputChange} required />
//                             <div className="underline"></div>
//                             <label htmlFor="">Enter Your City</label>
//                           </div>
//                         </div>
//                         <div className="form-row">
//                           <div className="input-data textarea">
//                          <div className="form-row submit-btn">
//                               <div className="input-data">
//                                 <button className="btn" onClick={saveForm}>Save</button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
                        
          
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddUser;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";



// const AddUser = () => {
//     const navigate = useNavigate(); // Changed to camelCase as per React convention

//     const [users, setUsers] = useState({
//         username: '',
//         email: '',
//         age: '',
//         city: ''
//     });

//     const handleUsernameChange = (event) => {
//         setUsers({...users, username: event.target.value})
//     }

//     const handleEmailChange = (event) => {
//         setUsers({...users, email: event.target.value})
//     }

//     const handleAgeChange = (event) => {
//         setUsers({...users, age: event.target.value})
//     }

//     const handleCityChange = (event) => {
//         setUsers({...users, city: event.target.value})
//     }

//     const saveForm = (event) => {
//         event.preventDefault(); // Prevent the default form submission
//         saveUserData(users); // Save user data
//         console.log('User data saved:', users);
//         navigate('/user-management'); // Navigate to user management page
//     }

//     return (
//         <div>
//             <h2 className="add-user">Add User</h2>
//             <div class="container">
//                 <form onSubmit={saveForm}> {/* Added onSubmit attribute */}
//                     <div class="form-row">
//                         <div class="input-data">
//                             <input type="text" id="fullname" name="fullname" onChange={handleUsernameChange} value={users.username} required />
//                             <div class="underline"></div>
//                             <label for="">Enter Your Username</label>
//                         </div>
//                         <div class="input-data">
//                             <input type="email" id="email" name="email" value={users.email} onChange={handleEmailChange} required />
//                             <div class="underline"></div>
//                             <label for="">Enter Your Email Address</label>
//                         </div>
//                     </div>
//                     <div class="form-row">
//                         <div class="input-data">
//                             <input type="number" id="number" name="number" value={users.age} onChange={handleAgeChange} required />
//                             <div class="underline"></div>
//                             <label for="">Enter Your Age</label>
//                         </div>
//                         <div class="input-data">
//                             <input type="text" id="address" name="address" value={users.city} onChange={handleCityChange} required />
//                             <div class="underline"></div>
//                             <label for="">Enter Your City</label>
//                         </div>
//                     </div>
//                     <div class="form-row submit-btn">
//                         <div class="input-data">
//                             <button className="btn" type="submit">Save</button> {/* Changed onClick to type="submit" */}
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );}


// export default AddUser;
