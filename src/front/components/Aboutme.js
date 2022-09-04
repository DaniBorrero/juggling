import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import { AboutMeCard } from './AboutMeCard';



export const Aboutme = () => {
  return (
    <>
        <Carousel className="about-carrousel ">
            <Carousel.Item>
                <AboutMeCard />                        
            </Carousel.Item>

            <Carousel.Item>
                <AboutMeCard/>        
            </Carousel.Item>

            <Carousel.Item>
                <AboutMeCard/>
            </Carousel.Item>
        </Carousel>
    </>
  )
}
