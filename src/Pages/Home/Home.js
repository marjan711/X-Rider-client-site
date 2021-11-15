import React from 'react';
import Partners from '../Partners/Partners';
import Review from '../UserReview/Review';
import Banner from './Banner/Banner';
import Banner2 from './Banner2';
import HomeShop from './HomeShop';
import Offer from './Offer';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Banner2></Banner2>
            <HomeShop></HomeShop>
            <Review></Review>
            <Offer></Offer>
            <Partners></Partners>
            
            
            
           
        </div>
    );
};

export default Home;