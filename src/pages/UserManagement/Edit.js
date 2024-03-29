import { useState, useEffect,  } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from './Data';
import { useData } from './Data';
import { validateEmail } from '../../utils/common';
import ViTextInput from "../../components/ViTextInput";
import ViPasswordInput from "../../components/ViPasswordInput";


import { saveUserData } from "./Data";
import { computeHeadingLevel } from "@testing-library/react";
import axios from "axios";
import { prevState } from "react";





const Edit = () => {
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const { id } = useParams();
    const { Data, updateData } = useData();

    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        age: '',
        city: ''
    });

    const [errMsg, setErrMsg] = useState({
        name: '',
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

    const validateForm = () => {
        let isValid = true;
        const { name, email, age, city } = user;
      
        if (name === '') {
          setErrMsg(prevState => ({ ...prevState, name: 'Name Required' }));
          isValid = false;
        }
        
        if (email === '') {
          setErrMsg(prevState => ({ ...prevState, email: 'Email Required' }));
          isValid = false;
        } else if (!validateEmail(email)) {
          setErrMsg(prevState => ({ ...prevState, email: 'Invalid Email Format' }));
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

    // const saveForm = () => {
    //     // You can send the updated user data to a server if needed
    //     console.log('Updated User:', user);
    //     navigate('/user-management');
    // }


    const saveForm = () => {
        setIsSubmitted(true);
        console.log('save form');
        console.log('user ',user );
        if(validateForm()){
        navigate('/user-management');
        }
      }

    return (
        <div>
            <h2 className="add-user">Edit </h2>
            <div className="container">
                <div className="text"></div>
                <form>
                    <div className="form-row">
                        {/* Name start */}
                       <ViTextInput
                            type="text"
                            id="name"
                            name="name"
                            title="Enter Your Name"
                            value={user.name}
                            handleChange={handleInputChange}
                            errMsg={errMsg.name}
                            isSubmitted={isSubmitted} 
                        />
                        {/* Name end */}
                     {/* usermane start */}
                       <ViTextInput
                            type="email"
                            id="email"
                            name="email"
                            title="Enter Your Email Address"
                            value={user.email}
                            handleChange={handleInputChange}
                            errMsg={errMsg.email}
                            isSubmitted={isSubmitted}
                            />
                    {/* usermane end */}
                    </div>
                    <br/>
                    <div className="form-row">
                        {/* Password start */}
                         <ViPasswordInput
                            type="password"
                            id="password"
                            name="password"
                            title="Enter Your Password"
                            value={user.password}
                            handleChange={handleInputChange}
                            errMsg={errMsg.password}
                            isSubmitted={isSubmitted}
                        />
                        {/* Password end */}
                        {/* Age start */}
                        <ViTextInput
                            type="number"   
                            id="age"
                            name="age"
                            title="Enter Your Age"
                            value={user.age}
                            handleChange={handleInputChange}
                            errMsg={errMsg.age}
                            isSubmitted={isSubmitted}
                        />
                        {/* Age end */}
                    </div>
                    <br/>
                    <div className="form-row">
                        {/* City start */}
                        <ViTextInput
                            type="text"
                            id="city"
                            name="city"
                            title="Enter Your City"
                            value={user.city}
                            handleChange={handleInputChange}
                            errMsg={errMsg.city}
                            isSubmitted={isSubmitted}  
                        />
                        {/* City end */}

                       
                    
                    </div>
                    {/*button start */}
                    <div className="form-row">
                        <div className="input-data textarea">
                            <div className="form-row submit-btn">
                                <div className="from-group">
                                    <button className="btn" type="button" onClick={saveForm}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*button end */}
                </form>
            </div>
        </div>
    );
}

export default Edit;

























