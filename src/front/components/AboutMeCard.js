import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const AboutMeCard = (props) => {
  return (
    <>
        <Row className="container m-5">
            <Col>
            <img
                className="d-block w-100 aboutMeImg m-5"
                src={props.src}
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
