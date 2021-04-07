import React from 'react'
import { Carousel,Button,CardDeck,Card,Figure,Image} from 'react-bootstrap'
import banner from '../imgs/roof2.jpg'
import person from '../imgs/user.jpeg'

export default function Home(props){
    let workType=['first','second','third']
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
                        <Button variant="outline-secondary">Contact</Button>{' '}
                        <Button variant="outline-secondary">My Work</Button>{' '}

                        </div>

                        <Carousel.Caption id='figure'>
                        <Figure>

                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={person}
                                roundedCircle
                            />    
                        </Figure>                        
                        </Carousel.Caption>

                        <Carousel.Caption id='caption'>
                            <h1>
                                Construction Expert
                            </h1>

                        </Carousel.Caption>
                    </Carousel.Item>  
                </Carousel>
                <br/><br/><br/><br/>
                <h1 className='title'>Jose's Construction Company</h1>
        
               <CardDeck >
                {workType.map(type=>
                
                        <Card key={type}bg='secondary' border="secondary" className={`cards ${type}`}>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            {/* <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer> */}
                        </Card>
                    
                )}
                </CardDeck>
                <br/><br/>
        </div>
       
    )
}