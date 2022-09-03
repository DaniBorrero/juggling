import React from 'react'

import Carousel from 'react-bootstrap/Carousel';



export const Aboutme = () => {
  return (
    <>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://static.bandainamcoent.eu/high/one-piece/one-piece-world-seeker/00-page-setup/opws_game-thumbnail.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://static.bandainamcoent.eu/high/one-piece/one-piece-world-seeker/00-page-setup/opws_game-thumbnail.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://static.bandainamcoent.eu/high/one-piece/one-piece-world-seeker/00-page-setup/opws_game-thumbnail.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
  )
}
