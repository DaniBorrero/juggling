import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Contact } from './Contact';

export const Footer = () => {
    return (
        <>

            <Row className="row-footer">
                <Col>
                    <Contact className="m-5" />
                </Col>
                <Col className="m-5 contact-form">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Direccion de correo.</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                Ingresa tu direccion.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Comentario</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>

        </>
    )
}
