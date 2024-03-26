
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUserData } from "./Data";
import { computeHeadingLevel } from "@testing-library/react";
import ViTextInput from "../../components/ViTextInput";
import { validateEmail } from "../../utils/common";
import axios from "axios";
import { prevState } from "react";
import ViPasswordInput from "../../components/ViPasswordInput";




 

const AddUser = () => {

  const Navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [users, setUsers] = useState({

    username: '',
    password: '',
    email: '',
    age: '',
    city: ''
  });
  const [errMsg, setErrMsg] = useState({
    username: '',
    password: '',
    email: '',
    age: '',
    city: ''
  });



  // const validateForm = () => {
  //   let isValid = true;
  //   if (users.username === '') {
  //     errMsg.username = 'Username Required';
  //     isValid = false;
  //   }
  //   if (users.email === '') {
  //     errMsg.email = 'Email Required';
  //     isValid = false;
  //   } 
  //   if (users.age === '') {
  //     errMsg.age = 'Age Required';
  //     isValid = false;
  //   }
  //   if (users.city === '') {
  //     errMsg.city = 'City Required';
  //     isValid = false;
  //   }
  //   return isValid;
  // }

  const validateForm = () => {
    let isValid = true;
    const { username, password, email, age, city } = users;
  
    if (username === '') {
      setErrMsg(prevState => ({ ...prevState, username: 'Username Required' }));
      isValid = false;
    }
    if (password === '') {
      setErrMsg(prevState => ({ ...prevState, password: 'Password Required' }));
      isValid = false;
    }
    
    if (email === '') {
      setErrMsg(prevState => ({ ...prevState, email: 'Email Required' }));
      isValid = false;
    } else if (!validateEmail(email)) {
      setErrMsg(prevState => ({ ...prevState, email: 'Invalid Email' }));
      isValid = false;
    }
  
    if (age === '') {
      setErrMsg(prevState => ({ ...prevState, age: 'Age Required' }));
      isValid = false;
    }
  
    if (city === '') {
      setErrMsg(prevState => ({ ...prevState, city: 'City Required' }));
      isValid = false;
    }
  
    return isValid;
  }
  

  





  const handleChange = (event) => {
    setUsers({...users, [event.target.name]: event.target.value})
  }

  

  
    const saveForm = () => {
    setIsSubmitted(true);
    console.log('save form');
    console.log('user ',users );
    if(validateForm()){
    Navigate('/user-management');
    }
  }


  return (
    <div>
       <h2 className="add-user">Add User</h2>
   
      
 
        <div class="container">
        <div class="text"></div>
        <form action="user_data" method="POST">
      

            <div class="form-row">
              {/* usermane start */}
                <ViTextInput
                title="Enter Your Username"
                name="username"
                id="username"
                value={users.username}
                handleChange={handleChange}
                isSubmitted={isSubmitted}
                errMessage={errMsg.username}
                />
                {/* usermane end */}
                {/* password start */}
                <ViPasswordInput
                title="Enter Your Password"
                name="password"
                id="password"
                value={users.password}
                handleChange={handleChange}
                isSubmitted={isSubmitted}
                errMessage={errMsg.password}
                />
                {/* password end */}  
                
            </div>
            <br/>
            <div class="form-row">
           {/* email start */}
           <ViTextInput
                title="Enter Your Email Address"
                name="email"
                id="email"
                value={users.email}
                handleChange={handleChange}
                isSubmitted={isSubmitted}
                errMessage={errMsg.email}
                />
                {/* email end */}
                {/* password start */}
                <ViTextInput
                title="Enter Your Age"
                name="age"
                id="age"
                value={users.age}
                handleChange={handleChange}
                isSubmitted={isSubmitted}
                errMessage={errMsg.age}
                />
                {/* password end */}
              
            </div>
            <br/>
            <div class="form-row">
                {/* city start */} 
                <ViTextInput
                title="Enter Your City"
                name="city"
                id="city"
                value={users.city}
                handleChange={handleChange}
                isSubmitted={isSubmitted}
                errMessage={errMsg.city}
                />
                {/* city end */}
            </div>
            <div class="form-row">
                <div class="input-data textarea">
                    <div class="form-row submit-btn">
                        <div class="input-data">
                            <button type="button" className="btn" onClick={saveForm}>Save</button>

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
