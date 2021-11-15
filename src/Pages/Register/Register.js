import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useFirebase';

const Register = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const {createUser,isLoading}=useAuth();

    const handleName=(e)=>{
        setName(e.target.value);
        console.log(e.target.value)
        
    }


    const handleEmail=(e)=>{
        setEmail(e.target.value);
        console.log(e.target.value)
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    const handleRegister = () => {
        createUser(email, password,name);
        
        
    }


    return (
        <div>
            <div className="conatainer">
                <div className="row form-container">

                    <div className="col-md-6 mb-3">
                        <img src="https://i.ibb.co/31M4RGK/Mobile-login-Cristina.jpg" className="img-fluid mt-3" alt="" />
                    </div>

                    <div className="col-md-6 mt-md-5 mb-5">
                        <h3 className="mb-3 mt-5 fw-bold">Create New Account</h3>

                        {
                            !isLoading && <div className="form">

                            <div className="form-group mb-3 mt-2">
                                <label htmlFor="email">Name</label>
                                <input onBlur={handleName} type="text" name="name"  className="c-input"/>
                            </div>

                            <div className="form-group mb-3 mt-2">
                                <label htmlFor="email">Email</label>
                                <input onBlur={handleEmail} type="email" name="email"  className="c-input"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input onBlur={handlePassword} type="password" name="password" className="c-input"/>
                                
                            </div>
                        </div>
                        }

                        


                        {isLoading && <Spinner animation="border" />}
                        {isLoading && <Alert  variant="success">
                            Successfully Account Created
                        </Alert>
                        }

                        <input onClick={handleRegister} value="Register" type="submit" className="btn btn-login mt-2 mb-4"/>
                        
                        

                        <Link to='./login'>
                           <h6 className="c-text">Already, have Account</h6>
                        </Link>
                        
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;