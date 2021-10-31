import React from 'react'
import { Carousel } from 'react-bootstrap'

export const CarouselSlide = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100" src="assets/lidherma/delineador" alt="First slide"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src="assets/lidherma/bronceador" alt="Second slide"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src="assets/lidherma/hydrapore" alt="Third slide"/>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
