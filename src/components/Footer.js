import React from 'react'
import { Row,Container,Col } from 'react-bootstrap'
export default class Footer extends React.Component {
    render(){
        return(
            <footer className='footer'>
                <Container>
                    <Row >  
                     <Col>© Copyright 2021    |     All Rights Reserved</Col>
                    </Row>               
                </Container>
             
             </footer>
        )
    }
}