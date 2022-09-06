import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import { AboutMeCard } from './AboutMeCard';

import meDeveloper from '../imagen/52356194.jpeg'
import meJuggling from '../imagen/juggling.jpg'
import meJuggling2 from '../imagen/juggling2.jpg'





export const Aboutme = ()  => {
  return (
    <>
        <Carousel className="about-carrousel">
            <Carousel.Item className='container'>
                <AboutMeCard src={meDeveloper}/>                        
            </Carousel.Item> 

            <Carousel.Item>
                <AboutMeCard src={meJuggling}/>        
            </Carousel.Item>

            <Carousel.Item>
                <AboutMeCard src={meJuggling2}/>
            </Carousel.Item>
        </Carousel>
    </>
  )
}
