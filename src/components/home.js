import React from 'react'
import {Image, Carousel} from 'react-bootstrap'
import banner from '../imgs/entranceBanner.jpg'
export default function Home(props){
    return(
        <div>
            <div>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        id='banner'src={banner}
                        />
                        <Carousel.Caption>
                            <h3>Jose's construction</h3>
                            <p>All services for your home needs.</p>
                        </Carousel.Caption>
                    </Carousel.Item>  
                </Carousel>
            </div>
            <div id='#about'>

            </div>
        </div>
       
    )
}