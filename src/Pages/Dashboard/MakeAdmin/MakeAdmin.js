import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import useAuth from '../../../hooks/useFirebase';;

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleAdminEmail = e => {
        setEmail(e.target.value);
    }
    const SubmitAdmin = e => {
        const user = { email };
        fetch('https://protected-scrubland-08359.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h1 className="bold mt-5">Make New Admin</h1>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img src="https://i.ibb.co/8bbt9RS/3947703.jpg" className="img-fluid" alt="" />
                    </div>

                    <div className="col-md-4 mt-5">
                           <form className="mt-5" onSubmit={SubmitAdmin} >
                                <div className="form-group mb-3 mt-2">
                                            <label htmlFor="email">Email</label>
                                            <input onBlur={handleAdminEmail} type="email" name="email"  className="c-input"/>
                                </div>
                                <button type="submit" className="btn btn-login">Make Admin</button>
                           </form>

                           {
                               success && <Alert className="mt-4"  variant="success">
                               Admin Created Successfully
                             </Alert>
                           }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MakeAdmin;