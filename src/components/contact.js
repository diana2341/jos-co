import React from 'react'
import {Container,Form,Button,Row} from 'react-bootstrap'

export default function Contact(props){
    return(
        <div class='f-pg' id='contact'>
        <Container>
            <Form id='form'>
                <Form.Group  as={Row} controlId="Name">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="Name" placeholder="Name" />
                </Form.Group>

                <Form.Group  as={Row} controlId="formBasicEmail">
                    <Form.Label>Enter Your Email </Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group  as={Row} controlId="formBasicSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="Subject" placeholder="Subject" />
                </Form.Group>

                <Form.Group  as={Row} controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter Your Message</Form.Label>
                    <Form.Control type="Message" placeholder="Message"  as="textarea" rows={3} />
                </Form.Group>
                <Button id='submit'variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
        </div>
    )
}