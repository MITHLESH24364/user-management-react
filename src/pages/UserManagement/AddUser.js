
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUserData } from "./Data";
import { computeHeadingLevel } from "@testing-library/react";
import ViTextInput from "../../components/ViTextInput";
import { validateEmail, validatePassword, validateUsername } from "../../utils/common";
import axios from "axios";
import { prevState } from "react";
import ViPasswordInput from "../../components/ViPasswordInput";
import ViNumberInput from "../../components/ViNumberInput";


 

const AddUser = () => {

  const Navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [users, setUsers] = useState({
    id: '',
    name: '',
    password: '',
    email: '',
    age: '',
    city: ''
  });
  const [errMsg, setErrMsg] = useState({
    id: '',
    name: '',
    password: '',
    email: '',
    age: '',
    city: ''
  });


  const validateForm = () => {
    let isValid = true;
    const { id, name, password, email, age, city } = users;
  
    if (id === '') {
      setErrMsg(prevState => ({ ...prevState, id: 'ID Required' }));
      isValid = false;
    }
    
    if (name === '') {
      setErrMsg(prevState => ({ ...prevState, name: 'Name Required' }));
      isValid = false;
    }

    if (password === '') {
      setErrMsg(prevState => ({ ...prevState, password: 'Password Required' }));
      isValid = false;
    }else if (!validatePassword(password)) {
        setErrMsg(prevState => ({ ...prevState, password: 'Invalid Password' }));
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
            <ViNumberInput
                title="Enter Your ID"
                name="id"
                id="id"
                value={users.id}
                handleChange={handleChange}
                isSubmitted={isSubmitted}
                errMessage={errMsg.id}
                />


              {/* usermane start */}
                <ViTextInput
                title="Enter Your Name"
                name="name"
                id="name"
                value={users.name}
                handleChange={handleChange}
                isSubmitted={isSubmitted}
                errMessage={errMsg.username}
                />
                {/* usermane end */}
              
                
            </div>
            <br/>
            <div class="form-row">
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
              
              
            </div>
            <br/>
            <div class="form-row">
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
                        <div className="form-froup">
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

