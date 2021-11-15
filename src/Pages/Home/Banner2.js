import React from 'react';
import { Link } from 'react-router-dom';

const Banner2 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://i.ibb.co/VjJJKz0/about-images.jpg" className="img-fluid" alt="" />
                </div>

                <div className="col-md-6">
                        <h1 className="fw-bolded mt-5">Best Adventure Tourer Bikes</h1>
                        <h6>PICK YOUR DESIRE BIKES.WE Provided Best PRoducts.YOU SHould Check Our Shop</h6>
                        <Link to="/products">
                         <button className="btn btn-success">SHOP</button>
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner2;