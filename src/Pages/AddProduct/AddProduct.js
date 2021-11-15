import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://protected-scrubland-08359.herokuapp.com/products',data)
         .then(res=>{
            if(res.data.insertedId){
                 alert("Service Added Successfully");
                 reset();
            }
         })
  
      
      };

    return (
        <div className="container">
            <div className="row">
                <h3 className="fw-bold mb-4">ADD NEW PRODUCTS</h3>
                <div className="col-md-6">
                    <img className="img-fluid" src="https://i.ibb.co/XxN1P6v/Outstanding-Factory-Worker-Vectors-2.jpg" alt="" />
                </div>

                <div className="col-md-6">
                    <form className="w-100 mt-5"  onSubmit={handleSubmit(onSubmit)}>

                    
                        <input className="p-2 w-75 mb-4" {...register("name")} placeholder="Product-Name"/>
                        <textarea className="w-75 mb-4" {...register("description")}placeholder="Description" />
                        <input className="p-2 w-75 mb-4" {...register("price")} placeholder="price"/>
                        <input className="p-2 w-75 mb-4" {...register("picture")} placeholder="picture url" />
                        
                        <br />

                        <input type="submit" className="btn btn-success btn-lg" value="submit" />
                    </form>
                </div>


            </div>
        </div>
    );
};

export default AddProduct;