
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const UserReview = () => {

    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://protected-scrubland-08359.herokuapp.com/reviews',data)
         .then(res=>{
            if(res.data.insertedId){
                 alert("Review Added  Successfully");
                 reset();
            }
         })
  
      
      };


    return (
        <div>
            <h1>Review</h1>
            
            <form className="w-100 mt-5"  onSubmit={handleSubmit(onSubmit)}>

                    
                        <input className="p-2 w-75 mb-4" {...register("name")}  placeholder="Your Name"/>
                        <input className="p-2 w-75 mb-4" {...register("rating")} placeholder="Enter Rating (1-5)"/>
                        <input className="p-2 w-75 mb-4" {...register("review")} placeholder="Review" />
                        
                        <br />

                        <input type="submit" className="btn btn-success btn-lg" value="submit" />
                    </form>
               

        </div>
    );
};

export default UserReview;


           