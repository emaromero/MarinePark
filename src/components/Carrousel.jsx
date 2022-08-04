import React from 'react';
import video from "../images/marinepark.mp4";
import img1 from "../images/images1.jpg";
import img2 from "../images/images2.jpg";
import img3 from "../images/images3.jpg";
import "./carrousel.css";
import Carousel from 'react-bootstrap/Carousel';

export const Carrousel = () => {
    return (
        <>
        <div className='w-100'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="First slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Second slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        />
                </Carousel.Item>
            </Carousel>
                        </div>
        </>
    )
}
