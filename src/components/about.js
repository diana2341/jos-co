import React from 'react'
import {Row, Carousel,Container,Jumbotron,Image,Col,Form,Button,ListGroup} from 'react-bootstrap'
import roof from '../imgs/foof3.jpeg'
import home from '../imgs/home.jpg'
import kitchen from '../imgs/kitchen.jpeg'

export default function About(props){
    let service=[
        ' Bathroom',
        'Kitchen',
        'Basement',
        'Roofing',
        'Siding',
        'Windows',
        'Pavers', 
        'Garages',
        'Drywall',
        'Painting',
        'Plumbing',
        'Wood/Metal Framing ',
        'Tile & Stone Installation ',
        'Trim & Fine Carpentry ',
        'Drop Ceilings',
         'Kitchen Cabinet Installation',
         'Hardwood Flooring',
         'Laminate Flooring',
        ' Stairs & Handrails',
         'Chimneys ',
        'Brick', 
        'Driveways '

    ]
    return(
        <div>
            <br/><br/><br/>
            <Container>
                <Row>
                    <Col  md={6}>

                        <h1 className='title'>Latest Works</h1>
                        <Carousel>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={home}
                                    alt="Second slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={kitchen}
                                    alt="Third slide"
                                />
                            </Carousel.Item>

                        </Carousel>

                    </Col>

                    <Col md={{ span: 4, offset: 2 }}>
                        <h1 className='title'>Services</h1><br/>
                        <ListGroup horizontal >
                            <Row>
                                {service.sort((a, b)=>a.length-b.length).map(service=>
                                <Col md={6}>
                                <ListGroup.Item key={service}>
                                    <i class="fas fa-hammer"></i>{' '}
                                    {service}
                                </ListGroup.Item>
                                </Col>
                                 )}
                            </Row>  
                     </ListGroup>
                    </Col>
                </Row>
            {/* <h1 className='title'>Latest Works</h1>
            <Carousel>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={roof}
            alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={home}
            alt="Second slide"
            />

            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={kitchen}
            alt="Third slide"
            />

            </Carousel.Item>
            </Carousel>
            <h2 id='call'>CONTACT US TODAY! 631-675-6214</h2><br/><br/>
            <h1 className='title'>Services</h1><br/>
            <ListGroup horizontal >
            <Row>
            {service.sort((a, b)=>b.length-a.length).map(service=>
            <Col md={6}>
            <ListGroup.Item key={service}>
            <i class="fas fa-hammer"></i>{' '}
            {service}
            </ListGroup.Item>
            </Col>
            )}
            </Row>  
            </ListGroup>
            */}
            </Container>
            <br/>
                
        </div>
    )
}