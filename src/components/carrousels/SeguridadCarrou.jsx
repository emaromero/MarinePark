import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../images/images1.jpg";
import img2 from "../../images/images2.jpg";
import img3 from "../../images/images3.jpg";

export const SeguridadCarrou = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
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
        </>
    )
}
