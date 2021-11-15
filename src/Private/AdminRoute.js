import React from 'react';
import { Spinner } from 'react-bootstrap';
import {
    Route,
    Redirect,
  } from "react-router-dom";
  import useAuth from '../hooks/useFirebase';

  const AdminRoute = ({ children,...rest }) => {
    const {user,isLoading,admin} =useAuth();
    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
         user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


export default AdminRoute;