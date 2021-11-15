import React, { useEffect, useState } from 'react';

const AllProductsAdmin = () => {
    const [products,setproducts]=useState([])
    const [deleteCount,setDeleteCount]=useState(false);

    useEffect(()=>{
        fetch('https://protected-scrubland-08359.herokuapp.com/allproducts')
        .then(res=>res.json())
        .then(data=>setproducts(data))
},[deleteCount])

const handleDelete =(id)=>{
    fetch(`https://protected-scrubland-08359.herokuapp.com/deleteproduct/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>setDeleteCount(data))
}
    return (
        <div>
                <div>
            <h1>All Services</h1>
            <h2>Now Service Available:{products.length}</h2>
            <div className="container">
            <div className="row">
           
            {
                        products.map(product =>(
                            
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
                                                    <button className="btn btn-danger" onClick={()=>handleDelete(product?._id)}>
                                                    Remove
                                                    </button>
                                                </div>
                                        </div>
                                 </div>
                             </div>
                            
                            ))
                    }
            </div>
            </div>
        </div>
        </div>
    );
};

export default AllProductsAdmin;