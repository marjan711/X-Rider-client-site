import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useFirebase';

const PlaceOrder = () => {
    const {user}=useAuth()
    const {productId}=useParams()
    const [product,setProduct] =useState({});
    const { register, handleSubmit,reset } = useForm();
   

    useEffect(()=>{
        const url =`https://protected-scrubland-08359.herokuapp.com/product/${productId}`
        console.log(url)
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[productId])

const onSubmit = data => {
            const selectOrder=product;
            
            data.email=user.email;
            console.log(user.email)
            data.order=selectOrder;
            data.status="Pending";
            
            axios.post('https://protected-scrubland-08359.herokuapp.com/confirmOrder',data)
            .then(res=>{
                if(res.data.insertedId){
                    alert("Service Added Successfully");
                    reset();
                }
            })
        }

    return (
        <div>
            <h1>Thank You For Select Us</h1>
            <h2>Confirm Your Order</h2>
            <div className="container">
          <div className="row">
              <div className="col-md-6   mt-5">
              <div  className="card  mt-3" >
                                        <div className="align-items-center p-2 text-center">
                                                <img src={product.picture} className="rounded" width="160" alt="" />
                                                <h5 className="fw-bold">{product.name}</h5>
                                                <div className="mt-3">
                                                    <span className="d-block info">
                                                        {product.description}
                                                    </span>
                                                </div>

                                                {/* price */}
                                                <div className="mt-3 text-dark">
                                                    <span className="fw-bold price">${product.price}</span>
                                                </div>
                                        </div>
                </div>
              </div>

              <div className="col-md-6 mt-4 pt-5 ">
              <form className="w-100"  onSubmit={handleSubmit(onSubmit)}>

                    
                    <input className="p-2 w-75 mb-4"  {...register("name")} defaultValue={user?.displayName} placeholder="Name"/>
                    <input className="p-2 w-75 mb-4"  {...register("email")} defaultValue={user?.email} placeholder="email"/>
                    <input className="p-2 w-75 mb-4" {...register("phone")} placeholder="Phone"/>
                    <input className="p-2 w-75 mb-4" {...register("address")} placeholder="Address" />
                    
                    
                    <br />
                    
                    <input type="submit" className="btn btn-success btn-lg" value="submit" />
                </form>
              </div>
          </div>
        </div>
        </div>
    );
};

export default PlaceOrder;