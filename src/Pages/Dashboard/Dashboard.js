import React, { useState } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import MyOrders from '../MyOrders/MyOrders';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Payment from './Payment';
import UserReview from './UserReview';
import useAuth from '../../hooks/useFirebase';
import Allorders from './Allorders';
import AllProductsAdmin from './AllProductsAdmin';





const Dashboard = () => {
    const [control,setControl]=useState("allservices");
    const {logOut,admin} =useAuth()
    return (
        <div>
           <div className="container">
               
               <div className="row">
                   <div className="col-md-3">
                   {
                       !admin&& <><h1>USERS DASHBOARD</h1>

                       <button className="btn mt-5" onClick={()=>setControl("payment")}>
                                        PAYMENT
                       </button>
    
                        <br />
    
                         <button className="btn mt-3" onClick={()=>setControl("myorders")}>
                                        MY-ORDERS
                         </button>
    
                        <br />
    
                         <button className="btn mt-3" onClick={()=>setControl("reviews")}>
                                        MY-REVIEWS
                        </button>
                        <br />
                        </>
                   }
                    {/* for admin */}
                    
                      {
                          admin && <> 
                            <h3 className="mt-5">Admin Dash-Board</h3>
                            <button className="btn mt-3" onClick={()=>setControl("addproducts")}>
                             ADD PRODUCTS
                            </button>

                            <br />

                            <button className="btn mt-3" onClick={()=>setControl("allproducts")}>
                                            All-PRODUCTS
                            </button>

                            <br />
                            <button className="btn mt-3" onClick={()=>setControl("orders")}>
                                            MANAGE-ORDERS
                            </button>
                            <br />
                            <button className="btn mt-3" onClick={()=>setControl("admin")}>
                                            MAKE-ADMIN
                            </button></>
                      }
                    
                 
                    <br />
                    <button className="btn btn-danger mt-4" onClick={logOut}>LogOut</button>











                   </div>

                   <div className="col-md-9">
                                {
                                    control==="payment" && <Payment></Payment>
                                }

                                {
                                    control==="myorders" && <MyOrders></MyOrders>
                                }

                                {
                                    control==="reviews" && <UserReview></UserReview>
                                }

                                {
                                    control==="addproducts" && <AddProduct></AddProduct>
                                }

                                {
                                    control==="allproducts" && <AllProductsAdmin></AllProductsAdmin>
                                }

                                {
                                    control==="orders" && <Allorders></Allorders>
                                }

                                {
                                    control==="admin" && <MakeAdmin></MakeAdmin>
                                }




                   </div>
               </div>
           </div>

        </div>
    );
};

export default Dashboard;