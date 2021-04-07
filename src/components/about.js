import React from 'react'
import {Row, Carousel,Container,Jumbotron,Image,Col,Form,Button} from 'react-bootstrap'
import user from '../imgs/user.jpeg'

export default function About(props){
    return(
        <div>
            <br/><br/><br/>
             <Jumbotron>
                <Container>
                    <Row>
                        <Col  md={6}>
                            <h1 className='title-food'> About!</h1>
                            <p className='about-p'>                         
                             lorem ipsum...
                                Nam aliquet, neque non sagittis euismod, ex arcu convallis velit, sed auctor lacus erat vitae nisi. Aenean leo dui, 
                                finibus eu rutrum eget, tempor eu nulla. Morbi tempor maximus lorem, vitae efficitur lorem malesuada gravida. Vivamus 
                                lacinia in nisl ac fringilla. Mauris id tristique ante. Mauris pharetra augue vitae nibh placerat feugiat. Mauris nulla augue,
                                 aliquam non interdum ac, pharetra at nunc. Vestibulum orci turpis, mattis eu nibh sed, pretium auctor arcu.
                            </p>
                        </Col>
                        <Col md={{ span: 4, offset: 2 }}>
                            <Image src={user} rounded className='about-img'fluid/><br/><br/>

                        </Col>
                    </Row>
                </Container>
                </Jumbotron>
        </div>
    )
}