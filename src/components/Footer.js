import React from 'react'
import { Row,Container,Col } from 'react-bootstrap'
export default class Footer extends React.Component {
    render(){
        return(
            <footer className='footer'>
                <Container>
                    <Row >  
                     <Col>March 2021 | Made with ❤️ by Diana Ponce</Col>
                    </Row>               
                </Container>
             
             </footer>
        )
    }
}