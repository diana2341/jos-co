import React from 'react'
import { Row,Container,Col } from 'react-bootstrap'
export default class Footer extends React.Component {
    render(){
        return(
            <div className='footer'>
                <Container>
                    <Row >  
                     <Col>© Copyright {new Date().getFullYear()}    |     All Rights Reserved</Col>
                    </Row>               
                </Container>
             
             </div>
        )
    }
}