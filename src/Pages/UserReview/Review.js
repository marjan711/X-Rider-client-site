import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('https://protected-scrubland-08359.herokuapp.com/allreview')
        .then(res=>res.json())
        .then(data=>setReviews(data))
},[])



    return (
        <div>
            <div className="container">
                <h1 className="text-success fw-bolder mt-4">#OUR CUSTOMERS FEEDBACK</h1>
                <div className="row">
                        {
                            reviews.map(review=>(
                                <div key={review._id} className=" col-md-4 gy-md-5 gy-sm-4 gy-5">

                                 <div  className="card  mt-3">
                                        <div className="align-items-center p-2 text-center">
                                                <div>
                                                   
                                                </div>
                                                <h6>"{review?.review}"</h6>
                                                <h5>Rating: {review.rating}<FontAwesomeIcon style={{color:"#e8ad0c"}} icon={faStar} /></h5>
                                                <div className="mt-3">
                                                <h5 className="fw-bold">{review.name}</h5>
                                                </div>

                                               
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

export default Review;