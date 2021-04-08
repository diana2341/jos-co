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
        <div id ='a-p'>
            <br/><br/><br/>
            <Container>
                <Row>
                    <Col  md={6}>

                        <h1 className='title a-b'>Latest Works</h1><br/><br/>
                        <Carousel className='work-info car'>

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
                        <h1 className='title a-b'>Services</h1><br/>
                        <ListGroup horizontal >
                            <Row>
                                {service.sort((a, b)=>a.length-b.length).map(service=>
                                <Col md={6}>
                                <ListGroup.Item  className='work-info list'variant='light' key={service}>
                                    <i class="fas fa-hammer"></i>
                                    {service}
                                </ListGroup.Item>
                                </Col>
                                 )}
                            </Row>  
                     </ListGroup>
                    </Col>
                </Row><br/><br/><br/>
                <Row className="justify-content-md-center">
                <Jumbotron className='work-info'>

                    <Col xs >
                        <h1 className='title'id='ex '>30 Years Expireince</h1>
                        <p id='about-p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec purus et nisi 
                        elementum consectetur quis id sem. Nulla ex mi, dignissim sollicitudin purus quis,
                        estibulum dapibus ex. Nunc lobortis sem sit amet diam vestibulum, in molestie felis 
                        tristique. In eu orci orci. Cras sed odio sed nisl maximus iaculis tempus in ligula. 
                        Vivamus dolor sapien, bibendum eget eros quis, dapibus dapibus sem. Vivamus pellentesque 
                        dolor non tellus sodales gravida. Donec pulvinar massa ullamcorper magna sollicitudin porta. 
                        Pellentesque a lacus fermentum, facilisis diam quis, rutrum libero. Nunc sit amet pulvinar nisl. 
                        Nam gravida, lorem interdum elementum elementum, massa sapien vestibulum erat, quis facilisis est
                        nisl et nisl. Vivamus id consequat quam.
                        </p>
                    </Col>
                </Jumbotron>

                    
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