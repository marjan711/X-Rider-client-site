import React, { useState } from 'react';
import useAuth from '../../hooks/useFirebase';
import { Link,useLocation,useHistory } from 'react-router-dom';
import './Login.css'



const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const {signInUsingGoogle,error,handleUserLogin}=useAuth();
    const location =useLocation();
    const history =useHistory();
    
    
    // for redirect desire location using gmail
    
    const handleGoogleLogIn =()=>{
        signInUsingGoogle(location,history)
        
    } 

    
    const handleEmail=(e)=>{
        setEmail(e.target.value);
        console.log(e.target.value)
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    const handleLogin = () => {
        handleUserLogin(email,password,location,history);
      };
    
      const img=
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
    </svg>;

    return (
        <div>
            <div className="conatainer">
                <div className="row form-container">

                    <div className="col-md-6 mb-3">
                        <img src="https://i.ibb.co/L1PcW3r/3275434.jpg" className="img-fluid mt-3" alt="" />
                    </div>

                    <div className="col-md-6 mt-md-5 mb-5">
                        <h3 className="mb-3 mt-5 fw-bold">Sign In</h3>

                        <div className="form">
                            <div className="form-group mb-3 mt-2">
                                <label htmlFor="email">Email</label>
                                <input onBlur={handleEmail} type="email" name="email"  className="c-input"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input onBlur={handlePassword} type="password" name="password" className="c-input"/>
                                
                            </div>
                        </div>
                        
                        <input onClick={handleLogin} value="Login" type="submit" className="btn btn-login mt-2"/>
                        <br />
                        <button className="btn btn-success mt-3 mb-5" onClick={ handleGoogleLogIn}> {img} Google</button>

                        <Link to='./register'>
                           <h6 className="c-text">Create New  Account</h6>
                        </Link>

                        <h5 className="text-danger fw-bolder mb-3">{error}</h5>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;