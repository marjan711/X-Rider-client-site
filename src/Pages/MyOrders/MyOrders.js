import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useFirebase';

const MyOrders = () => {
    const {user}=useAuth();
    
    const email=user.email || "180207109@gmail.com";
    
    
    const [orders,setOrders]=useState([])
    const [deleteCount,setDeleteCount]=useState(false)
    
    
    useEffect(()=>{
        
        
        const url =`https://protected-scrubland-08359.herokuapp.com/myorders/${email}`;
        
        fetch(url)
        .then(res=>res.json())
         .then(data=>setOrders(data))
    },[email,deleteCount])

    const handleDelete =(id)=>{
            const proceed=window.confirm("ARE YOU SURE ?");
            if(proceed){
                fetch(`https://protected-scrubland-08359.herokuapp.com/deleteOrder/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>setDeleteCount(data))
            }
            
    }
    const cross =<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
    </svg>

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1>Your Ordered Items</h1>
                    {
                        orders.map(order=>(
                          <div key={order._id} className="col-md-4 gy-md-5 gy-sm-4 gy-5">
                                <div  className="card  mt-3" >
                                        <div className="align-items-center p-2 text-center">
                                                <img src={order?.order?.picture} className="rounded" width="160" alt="" />
                                                <h5 className="fw-bold">{order?.order?.name}</h5>
                                                <div className="mt-3">
                                                    <span className="d-block info">
                                                        {order?.order?.description}
                                                    </span>
                                                </div>

                                                {/* price */}
                                                <div className="mt-3 text-dark">
                                                    <span className="fw-bold price">${order?.order?.price}</span>
                                                </div>

                                                <button onClick={()=>handleDelete(order?._id)} className="btn btn-danger mt-2 mb-2"> {cross} Remove </button>
                                        </div>
                             </div>
                          </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;