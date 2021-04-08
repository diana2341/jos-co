import React from 'react'
import { Carousel,Button,CardDeck,Card,Row,Col, Container} from 'react-bootstrap'
import banner from '../imgs/roof2.jpg'
import bath from '../imgs/bath.jpg'
import siding from '../imgs/siding.jpg'
import door from '../imgs/door2.jpeg'
import Contact from'./contact'
import TextTransition, { presets } from "react-text-transition";


export default function Home(props){
    let workType=['Kitchen & Baths','Roofing & Siding','Windows & Doors']
    const TEXTS = [
        "Bathrooms",
        "Kitchens",
        "Roofs",
        "Flooring"
      ];
      const [index, setIndex] = React.useState(0);
      let renderImage=(option)=>{
        if (option === 'Kitchen & Baths')return bath
        else if (option === 'Roofing & Siding')return siding
        else if(option==='Windows & Doors')return door
        else return null
    }
      React.useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);
       
    return(
        <div className='wrapper'>
          
                <Carousel controls={false} indicators={false}>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        id='banner'src={banner}
                        />
                        {/* <video id='banner' autoPlay muted loop>
                        <source src={banner}type="video/mp4"/>
                        </video> */}
                         <div id='caption-buttons'>
                        <Button id='btn'variant="outline-secondary" size="lg">SCHEDULE A FREE ESTIMATE</Button>{' '}
                        {/* <Button variant="outline-secondary">My Work</Button>{' '} */}

                        </div> 
                        <Carousel.Caption id='caption'>

                            <Container >
                            <Row className="justify-content-md-center">
                                <Col>  
                                <h1>
                                    Interior and exterior design
                                    </h1>  
                                </Col><br/>
                            </Row>
                            <Row>
                            <Col md={{ span: 4, offset: 5 }}>    
                                    <h1>
                                        <TextTransition
                                        text={ TEXTS[index % TEXTS.length] }
                                        springConfig={ presets.gentle }
                                        />
                                    </h1>
                                </Col>
                            </Row>
                            </Container> 
                        </Carousel.Caption>

                       
                   

                    </Carousel.Item>  
                </Carousel>
                {/* <br/><br/><br/><br/> */}
                <h1 className='title'>Jose's Construction Company</h1>
                <br/><br/><br/><br/>

               <CardDeck >
                {workType.map(type=>
                
                        <Card key={type}bg='secondary' border="secondary" className={`cards ${type}`}>
                        <Card.Img className='img' variant="top" src={renderImage(type)} />

                              {/* <Card.Img variant="top" src="https://hw.menardc.com/main/store/20090519001/assets/images6/exteriordoors/Responsive/Hero_REV.jpg" /> */}

                            <Card.Body>
                                <Card.Title id='work'>{type}</Card.Title>
                                {/* <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text> */}
                            </Card.Body>
                            {/* <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer> */}
                        </Card>
                    
                )}
                </CardDeck>
                <Button  variant="outline-secondary">View All Services</Button>{' '}
                <br/><br/>
                <h2 id='call'>CONTACT US TODAY! 631-675-6214</h2>
                <br/><br/><br/>
                <Contact/>
        </div>
       
    )
}