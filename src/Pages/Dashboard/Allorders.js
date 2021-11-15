import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Allorders = () => {
    const [orders,setOrders]=useState([]);
    const [deleteCount,setDeleteCount]=useState(false);
    const [status,setStaus]=useState("");
    useEffect(()=>{
        fetch('https://protected-scrubland-08359.herokuapp.com/allOrders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
},[deleteCount])


const handleDelete =(id)=>{
    fetch(`https://protected-scrubland-08359.herokuapp.com/deleteOrder/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>setDeleteCount(data))
}

const handleStatus =(e)=>{
    setStaus(e.target.value);
    console.log(e.target.value);
}
console.log(status);

const handleUpdate=(id)=>{
    
        fetch(`https://protected-scrubland-08359.herokuapp.com/updateStatus/${id}`,{
            method:'PUT',
            headers:{'content-type' : 'application/json'
            },
            body:JSON.stringify({status}) 
            
         })
         
         
         
       
    
}
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <h1>All Orders</h1>
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>Package Name</th>
                    <th>Order Id</th>
                    <th>Username</th>
                    <th>Quantity</th>
                    <th>Booking Date</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                {
                    orders?.map((order,index)=>(
                    <tbody key={order._id}>

                        <tr>
                        <td>{index}</td>
                        <td>{order.order.name}</td>
                        <td>{order?._id}</td>
                        <td>{order.name}</td>
                        <td>{order.person}</td>
                        <td>{order.date}</td>
                        <td>

                                <h6>{order?.status}</h6>
                                <select onChange={handleStatus}  defaultValue={order?.status}>
                                    <option value="Active">Active</option>
                                    <option value="Processing">Processing</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            
                          
                       

                        </td>

                        <td>
                            <button className="btn btn-success" onClick={()=>handleUpdate(order?._id)}>Update</button>
                            <button className="btn btn-danger mt-2" onClick={()=>handleDelete(order?._id)}>Delete</button>
                            
                        </td>

                        </tr>
                        
                    </tbody>))
                }
                
        </Table>
                </div>
            </div>
        </div>
    );
};

export default Allorders;