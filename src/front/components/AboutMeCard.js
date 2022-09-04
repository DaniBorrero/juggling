import React from 'react'
import { Col, Row } from 'react-bootstrap'
import meDeveloper from '../imagen/52356194.jpeg'

export const AboutMeCard = () => {
  return (
    <>
        <Row>
            <Col>
            <img
                className="d-block w-100 aboutMeImg m-5"
                src={meDeveloper}
                alt="First slide"
                />
            </Col>
            <Col className='text-white'>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Col>
        </Row>
    
    </>
  )
}
