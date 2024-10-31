import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserServices } from '../Services/UserServices';
import Spinner from '../Spinner/Spinner';


const Registration = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        loading: false,
        user: {
            username: "",
            DOB: "",
            email: "",
            password: ""
        },
        message: ""
    });

    const updateHandle = (e) => {
        const { value, name } = e.target;
        setState((prevState) => ({
            ...prevState,
            user: {
                ...prevState.user,
                [name]: value
            }
        }));
    };


    const submitHandler = async (e) => {
        e.preventDefault();
        const { user } = state;
        setState({ ...state, loading: true });
    
        try {
            const response = await UserServices.userRegistration(user);
            console.log("Response from server:", response); // Log the response for debugging
    
            if (response) {
                setState({ ...state, loading: false,message:"Signup successfuly!"});
                navigate("/user/login", { replace: true });
                
            }
        } catch (error) {
            setState({
                ...state,
                loading: false,
                message: "Something went wrong. Data not posted."
            });
            alert("Something went wrong. Data not posted.");
        }
    
    };
    
    function validatePassword() {
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (validatePassword()) {
            await submitHandler(e);
        }
    };

    const { user, loading, message } = state;

    return (
    <>

    {loading?(<Spinner/>):(     
          <div className="container-fluid">
          {message && <div className="text-danger text-center mt-3">{message}</div>}
           <div className="row justify-content-center mt-3">
               <div className="col-md-5 d-flex justify-content-center">
                   <div className="login-card mt-5">
                       <div className="login-header align-items-center">
                           <span>Create Account</span>
                       </div>
                       <div className='container-fluid mb-4'>
                           <div className='col-md-12 user-icon text-center'>
                               <i className='fa fa-user-circle'></i>
                           </div>
                       </div>
                       <form onSubmit={handleFormSubmit}>
                           <div className="container d-flex mb-3 align-items-center justify-content-between">
                               <i className="fa fa-user icon ms-3"></i>
                               <div className='ms-3'>|</div>
                               <input  className="ms-1"  type="text"  value={user.username}  onChange={updateHandle}  
                                   placeholder="Username"  name="username"  required
                               />
                           </div>

                           <div className="container d-flex mb-3 align-items-center justify-content-between">
                               <i className="fa fa-calendar icon ms-3 "></i>
                               <div className='ms-3'>|</div>
                               <input className="ms-1" type="text" value={user.DOB} onChange={updateHandle} 
                                   placeholder="DD/MM/YYYY" name="DOB" required
                               />
                           </div>

                           <div className="container d-flex mb-3 align-items-center justify-content-between">
                               <i className="fa fa-envelope icon ms-3"></i>
                               <div className='ms-3'>|</div>
                               <input className="ms-1" type="email" value={user.email} onChange={updateHandle} 
                                   placeholder="Email" name="email" required
                               />
                           </div>

                           <div className="container d-flex mb-3 align-items-center justify-content-between">
                               <i className="fa fa-lock icon ms-3"></i>
                               <div className='ms-3'>|</div>
                               <input id="password" className="ms-1" type="password" value={user.password} onChange={updateHandle} 
                                   placeholder="Password" name="password" required
                               />
                           </div>

                           <div className="container d-flex mb-3 align-items-center justify-content-between">
                               <i className="fa fa-lock icon ms-3"></i>
                               <div className='ms-3'>|</div>
                               <input id="confirm-password" className="ms-1" type="password" 
                                 placeholder="Confirm password" required
                               />
                           </div>

                           <div className="container-fluid form-group form-check mb-3 d-flex justify-content-between">
                               <input type="checkbox" className="form-check-input" id="rememberMe" />
                               <label className="form-check-label ms-1" htmlFor="rememberMe">Remember me</label>
                               <a href="#" className="forget-password">Forgot your password?</a>   
                           </div>
                                <input className='btn btn-primary' type="submit" value="SIGN IN" />
                               
                           <div className='text-center  mt-2'>
                               <p className="login-link">Already have an account? 
                                  <Link to="/user/login"style={{color:'#23d5ab',textDecoration:"none", marginLeft:'4px'}}>Log In</Link>
                               </p>
                           </div>
                       </form>
                     
                   </div>
               </div>
           </div>
       </div>
     )}
        
    </>

    );

   
};

export default Registration;
