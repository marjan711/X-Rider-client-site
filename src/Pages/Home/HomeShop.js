import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeShop = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
            fetch('https://protected-scrubland-08359.herokuapp.com/allproducts')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h1 className="fw-bold text-success mt-4">#CYCLES</h1>
            <div className="container">
            <div className="row">
            {
                        products.slice(0,6).map(product =>(
                            
                            <div key={product._id} className="col-md-4 gy-md-5 gy-sm-4 gy-5">
                               
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

                                                {/* purchase Button */}
                                                <div className="p-3 mt-3  text-center">
                                                    <Link to={`/order/${product._id}`}>
                                                            <button className="btn cost text-white">Buy Now</button>
                                                    </Link>
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

export default HomeShop;