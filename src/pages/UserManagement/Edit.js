// import { useState, useEffect } from "react";
// import { Navigate, useNavigate, useParams } from "react-router-dom";
// import data from './Data';


// const Edit = () => {
//     const Navigate = useNavigate();

//     const { id } = useParams();
   
//         const[users, setUsers] = useState({
//             username: '',
//             email: '',
//             age: '',
//             city: ''
//         });

//         const handleUsernameChange = (event) => {
//             setUsers({...users, username: event.target.value})
//           }
//           const handleEmailChange = (event) => {
//             setUsers({...users, email: event.target.value})
//           }
//           const handleAgeChange = (event) => {
//               setUsers({...users, age: event.target.value})
//           }
//           const handleCityChange = (event) => {
//               setUsers({...users, city: event.target.value})
//           }

//         useEffect(() => {
//             const user = data.find((user) => user.id === parseInt(id));
//             setUsers(user);
//         });


//         const saveForm = () => {
//             console.log('save form');
//             console.log('user ',users );
//             Navigate('/user-management');
//          }
//     return (
//         <div>
//           <h2 className="add-user">Edit </h2>


//           <div class="container">
//         <div class="text"></div>
//         <form action="" method="">
//             <div class="form-row">
//                 <div class="input-data">
//                     <input type="text"  id="fullname" name="fullname" onChange={handleUsernameChange} value={users.username}   required />
//                     <div class="underline"></div>
//                     <label for="">Enter Your Username</label>
//                 </div>
//                 <div class="input-data">
//                     <input type="email"  id="email" name="email" value={users.email} onChange={handleEmailChange} required />
//                     <div class="underline"></div>
//                     <label for="">Enter Your Email Address</label>
//                 </div>
//             </div>
//             <div class="form-row">
//                 <div class="input-data">
//                     <input type="number"  id="number" name="number" value={users.age}  onChange={handleAgeChange} required />
//                     <div class="underline"></div>
//                     <label for="">Enter Your Age</label>
//                 </div>
//                 <div class="input-data">
//                     <input type="text"  id="address" name="address" value={users.city} onChange={handleCityChange} required />
//                     <div class="underline"></div>
//                     <label for="">Enter Your City</label>
//                 </div>
//             </div>
//             <div class="form-row">
//                 <div class="input-data textarea">
//                     <div class="form-row submit-btn">
//                         <div class="input-data">
//                             <button className="btn" onClick={saveForm}>Save</button>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     </div>


//           </div>
       
//       );
// }
// export default Edit;



// import { useState, useEffect } from "react";
// import { Navigate, useNavigate, useParams } from "react-router-dom";
// import data from './Data';

// const Edit = () => {
//     const navigate = useNavigate();
//     const { id } = useParams();

//     const [users, setUsers] = useState({
//         username: '',
//         email: '',
//         age: '',
//         city: ''
//     });

//     useEffect(() => {
//         const user = data.find(user => user.id === parseInt(id));
//         if (user) {
//             setUsers(user);
//         }
//     }, [id]);

//     const handleUsernameChange = (event) => {
//         setUsers({ ...users, username: event.target.value });
//     }
//     const handleEmailChange = (event) => {
//         setUsers({ ...users, email: event.target.value });
//     }
//     const handleAgeChange = (event) => {
//         setUsers({ ...users, age: event.target.value });
//     }
//     const handleCityChange = (event) => {
//         setUsers({ ...users, city: event.target.value });
//     }

//     const saveForm = () => {
//         console.log('save form');
//         console.log('user ', users);
//         navigate('/user-management');
//     }

//     return (
//         <div>
//             <h2 className="add-user">Edit </h2>
//             <div className="container">
//                 <div className="text"></div>
//                 <form>
//                     <div className="form-row">
//                         <div className="input-data">
//                             <input type="text" id="fullname" name="fullname" onChange={handleUsernameChange} value={users.username} required />
//                             <div className="underline"></div>
//                             <label htmlFor="fullname">Enter Your Username</label>
//                         </div>
//                         <div className="input-data">
//                             <input type="email" id="email" name="email" value={users.email} onChange={handleEmailChange} required />
//                             <div className="underline"></div>
//                             <label htmlFor="email">Enter Your Email Address</label>
//                         </div>
//                     </div>
//                     <div className="form-row">
//                         <div className="input-data">
//                             <input type="number" id="number" name="number" value={users.age} onChange={handleAgeChange} required />
//                             <div className="underline"></div>
//                             <label htmlFor="number">Enter Your Age</label>
//                         </div>
//                         <div className="input-data">
//                             <input type="text" id="address" name="address" value={users.city} onChange={handleCityChange} required />
//                             <div className="underline"></div>
//                             <label htmlFor="address">Enter Your City</label>
//                         </div>
//                     </div>
//                     <div className="form-row">
//                         <div className="input-data textarea">
//                             <div className="form-row submit-btn">
//                                 <div className="input-data">
//                                     <button className="btn" type="button" onClick={saveForm}>Save</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Edit;









// Edit.js
// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import data from "./data";


// import data  from './Data';

// const Edit = () => {
//     const navigate = useNavigate();
//     const { id } = useParams();

//     const [users, setUsers] = useState({
//         username: '',
//         email: '',
//         age: '',
//         city: ''
//     });

//     useEffect(() => {
//         // Fetch user data when component mounts
//         const user = data.find(user => user.id === parseInt(id));
//         if (user) {
//             setUsers(user);
//         }
//     }, [id]);

//     const handleUsernameChange = (event) => {
//         setUsers(prevState => ({ ...prevState, username: event.target.value }));
//     }

//     const handleEmailChange = (event) => {
//         setUsers(prevState => ({ ...prevState, email: event.target.value }));
//     }

//     const handleAgeChange = (event) => {
//         setUsers(prevState => ({ ...prevState, age: event.target.value }));
//     }

//     const handleCityChange = (event) => {
//         setUsers(prevState => ({ ...prevState, city: event.target.value }));
//     }

//     const saveForm = (event) => {
//         event.preventDefault(); // Prevent default form submission behavior
//         console.log('save form');
//         console.log('user ', users);
        
//         // Update the user data in data.js
//         updateUser(parseInt(id), users);

//         // Navigate to another page
//         navigate('/user-management');
//     }

//     return (
//         // Your JSX for the form...
//         <div>
//         <h2 className="add-user">Edit </h2>

//         <div className="container">
//             <div className="text"></div>
//             <form onSubmit={saveForm}>
//                 <div className="form-row">
//                     <div className="input-data">
//                         <input type="text" id="fullname" name="fullname" onChange={handleUsernameChange} value={users.username} required />
//                         <div className="underline"></div>
//                         <label htmlFor="fullname">Enter Your Username</label>
//                     </div>
//                     <div className="input-data">
//                         <input type="email" id="email" name="email" value={users.email} onChange={handleEmailChange} required />
//                         <div className="underline"></div>
//                         <label htmlFor="email">Enter Your Email Address</label>
//                     </div>
//                 </div>
//                 <div className="form-row">
//                     <div className="input-data">
//                         <input type="number" id="age" name="age" value={users.age} onChange={handleAgeChange} required />
//                         <div className="underline"></div>
//                         <label htmlFor="age">Enter Your Age</label>
//                     </div>
//                     <div className="input-data">
//                         <input type="text" id="city" name="city" value={users.city} onChange={handleCityChange} required />
//                         <div className="underline"></div>
//                         <label htmlFor="city">Enter Your City</label>
//                     </div>
//                 </div>
//                 <div className="form-row submit-btn">
//                     <button type="submit" className="btn">Save</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//     );
// }

// export default Edit;

// import { useState, useEffect } from "react";
// import { Navigate, useNavigate, useParams } from "react-router-dom";
// import data from './Data';

// const Edit = () => {
//     const navigate = useNavigate();
//     const { id } = useParams();

//     const [user, setUser] = useState({
//         username: '',
//         email: '',
//         age: '',
//         city: ''
//     });

//     useEffect(() => {
//         const currentUser = data.find(user => user.id === parseInt(id));
//         if (currentUser) {
//             setUser(currentUser);
//         }
//     }, [id]);

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setUser(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     }

//     const saveForm = () => {
//         console.log('save form');
//         console.log('user ', user);
//         navigate('/user-management');
//     }

//     return (
//         <div>
//             <h2 className="add-user">Edit </h2>
//             <div className="container">
//                 <div className="text"></div>
//                 <form>
//                     <div className="form-row">
//                         <div className="input-data">
//                             <input type="text" id="fullname" name="username" onChange={handleInputChange} value={user.username} required />
//                             <div className="underline"></div>
//                             <label htmlFor="fullname">Enter Your Username</label>
//                         </div>
//                         <div className="input-data">
//                             <input type="email" id="email" name="email" value={user.email} onChange={handleInputChange} required />
//                             <div className="underline"></div>
//                             <label htmlFor="email">Enter Your Email Address</label>
//                         </div>
//                     </div>
//                     <div className="form-row">
//                         <div className="input-data">
//                             <input type="number" id="number" name="age" value={user.age} onChange={handleInputChange} required />
//                             <div className="underline"></div>
//                             <label htmlFor="number">Enter Your Age</label>
//                         </div>
//                         <div className="input-data">
//                             <input type="text" id="address" name="city" value={user.city} onChange={handleInputChange} required />
//                             <div className="underline"></div>
//                             <label htmlFor="address">Enter Your City</label>
//                         </div>
//                     </div>
//                     <div className="form-row">
//                         <div className="input-data textarea">
//                             <div className="form-row submit-btn">
//                                 <div className="input-data">
//                                     <button className="btn" type="button" onClick={saveForm}>Save</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Edit;

// import { useState, useEffect,  } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import data from './Data';
// import { useData } from './Data';





// const Edit = () => {
//     const navigate = useNavigate();
//     const { id } = useParams();
//     const { Data, updateData } = useData();

//     const [user, setUser] = useState({
//         id: '',
//         username: '',
//         email: '',
//         age: '',
//         city: ''
//     });

//     useEffect(() => {
//         const currentUser = data.find(user => user.id === parseInt(id));
//         if (currentUser) {
//             setUser(currentUser);
//         }
//     }, [id]);

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setUser(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     }

//     const saveForm = () => {
//         // You can send the updated user data to a server if needed
//         console.log('Updated User:', user);
//         navigate('/user-management');
//     }

//     return (
//         <div>
//             <h2 className="add-user">Edit </h2>
//             <div className="container">
//                 <div className="text"></div>
//                 <form>
//                     <div className="form-row">
//                         <div className="input-data">
//                             <input type="text" id="fullname" name="username" onChange={handleInputChange} value={user.username} required />
//                             <div className="underline"></div>
//                             <label htmlFor="fullname">Enter Your Username</label>
//                         </div>
//                         <div className="input-data">
//                             <input type="email" id="email" name="email" value={user.email} onChange={handleInputChange} required />
//                             <div className="underline"></div>
//                             <label htmlFor="email">Enter Your Email Address</label>
//                         </div>
//                     </div>
//                     <div className="form-row">
//                         <div className="input-data">
//                             <input type="number" id="number" name="age" value={user.age} onChange={handleInputChange} required />
//                             <div className="underline"></div>
//                             <label htmlFor="number">Enter Your Age</label>
//                         </div>
//                         <div className="input-data">
//                             <input type="text" id="address" name="city" value={user.city} onChange={handleInputChange} required />
//                             <div className="underline"></div>
//                             <label htmlFor="address">Enter Your City</label>
//                         </div>
//                     </div>
//                     <div className="form-row">
//                         <div className="input-data textarea">
//                             <div className="form-row submit-btn">
//                                 <div className="input-data">
//                                     <button className="btn" type="button" onClick={saveForm}>Save</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Edit;





import { useState, useEffect,  } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from './Data';
import { useData } from './Data';
import ViTextInput from "../../components/ViTextInput";






const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { Data, updateData } = useData();

    const [user, setUser] = useState({
        id: '',
        username: '',
        email: '',
        age: '',
        city: ''
    });

    useEffect(() => {
        const currentUser = data.find(user => user.id === parseInt(id));
        if (currentUser) {
            setUser(currentUser);
        }
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const saveForm = () => {
        // You can send the updated user data to a server if needed
        console.log('Updated User:', user);
        navigate('/user-management');
    }

    return (
        <div>
            <h2 className="add-user">Edit </h2>
            <div className="container">
                <div className="text"></div>
                <form>
                    <div className="form-row">
                       <ViTextInput
                            type="text"
                            id="username"
                            name="username"
                            title="Enter Your Username"
                            value={user.username}
                            handleChange={handleInputChange}
                            required
                        />
                        <ViTextInput
                            type="email"
                            id="email"
                            name="email"
                            title="Enter Your Email Address"
                            value={user.email}
                            handleChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <ViTextInput
                            type="number"   
                            id="age"
                            name="age"
                            title="Enter Your Age"
                            value={user.age}
                            handleChange={handleInputChange}
                            required
                        />
                        <ViTextInput
                            type="text"
                            id="city"
                            name="city"
                            title="Enter Your City"
                            value={user.city}
                            handleChange={handleInputChange}
                            required
                        />
                

                       
                    
                    </div>
                   
                    <div className="form-row">
                        <div className="input-data textarea">
                            <div className="form-row submit-btn">
                                <div className="input-data">
                                    <button className="btn" type="button" onClick={saveForm}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edit;

























