import React, { useState } from 'react';
import { UserServices } from '../Services/UserServices';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const Login = ({ onLogin }) => {

  const navigate = useNavigate(); 

  const [state, setState] = useState({
    loading: false,
    user: {
      username: "",
      password: ""
    },
    message: ""
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setState((prevState) => ({ 
      ...prevState, 
      loading: true 
    })); 

    const { username, password } = state.user; 

    try {
      const response = await UserServices.userLogin(username, password);
      
      if (response.data.length > 0) {
        const user = response.data[0];
        
        if (user.username === username && user.password === password) {
          localStorage.setItem('user', JSON.stringify(user));
          setState({
            loading: false,
            user: response.data,
            message: "Login successful!"
          });
          onLogin(user);
          navigate('/home');
        } else {
          setState(prevState => ({
            ...prevState,
            loading: false,
            message: "Invalid username or password"
          }));
        }
      } else {
        setState(prevState => ({
          ...prevState,
          loading: false,
          message: "Invalid username or password"
        }));
      }
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        loading: false,
        message: "Login failed"
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setState(prevState => ({
       ...prevState,
       user: {
        ...prevState.user,
        [name]: value 
      }
    }));
  };

  const { loading, message } = state;

  return (
    
    <>

    {loading?(<Spinner/>):(
    <div className="container-fluid">
      {message && <div className="alert alert-info text-center">{message}</div>}
      <div className="row justify-content-center mt-3">
        <div className="col-md-5 d-flex justify-content-center">
          <div className="login-card mt-5">
            <div className="login-header align-items-center">
              <span>LOG IN</span>
            </div>
            <div className='container-fluid mb-4'>
              <div className='col-md-12 user-icon text-center'>
                <i className='fa fa-user-circle'></i>
              </div>
            </div>
            <form onSubmit={handleLogin}>
              <div className="container d-flex mb-3 align-items-center justify-content-between">
                <i className="fa fa-user icon ms-3"></i>
                <div className='ms-3'>|</div>
                <input className="ms-1" type="text" value={state.user.username} onChange={handleChange} 
                    placeholder="Username" name="username" required
                />
              </div>

              <div className="container d-flex mb-3 align-items-center justify-content-between">
                <i className="fa fa-lock icon ms-3"></i>
                <div className='ms-3'>|</div>
                <input
                  id="password" className="ms-1" type="password" value={state.user.password}  onChange={handleChange} 
                      placeholder="Password" name="password" required
                />
              </div>

              <div className="container-fluid form-group form-check mb-3 d-flex justify-content-between">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label ms-1" htmlFor="rememberMe">Remember me</label>
                <a href="#" className="forget-password">Forgot your password?</a>   
              </div>
              <input className='btn btn-primary' type="submit" value="LOG IN"/>
              
              <div className='text-center mt-2'>
                <p className="login-link">Don't have an account? 
                  <Link to="/user/register"style={{color:'#23d5ab', marginLeft:'4px',textDecoration:'none'}}>Sign In</Link>
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

export default Login;
