import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="mb-4">
             <Carousel >
                <Carousel.Item>
                    <img
                    className="d-block w-100 custom "
                    src="https://i.ibb.co/SNJzMJd/pexels-dafne-mungu-a-7771159-1.jpg"
                    alt="First slide"
                    /> 
                            
                    <Carousel.Caption>
                    
                    <h1 className="fw-bolder text-success ">WELCOME TO  </h1>
                    <br/>
                    <br/>
                    <h1 className="fw-bolder text-danger ">X_RIDERS</h1>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src="https://i.ibb.co/vcfrzKW/pexels-mali-maeder-101666-1.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1 className="fw-bold  animate__animated animate__flash animate__slow text-success">PICK YOUR GEAR </h1>
                    <br />
                    <br />
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src="https://i.ibb.co/09m8K9g/pexels-cottonbro-5913562-1.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1 className="fw-bolder text-danger animate__animated animate__flash animate__slow ">SELECT YOUR DESTINATION</h1>
                    <Link to="/services">
                        <button className="btn btn-success">EXPLORE US</button>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
    );
};

export default Banner;