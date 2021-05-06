import React from 'react'
import {Row, Carousel,Container,Jumbotron,Image,Col,Form,Button,ListGroup} from 'react-bootstrap'
import roof from '../imgs/foof3.jpeg'
import work1 from '../imgs/work1.jpg'
import work2 from '../imgs/work2.jpg'
import work3 from '../imgs/work3.jpg'
import work4 from '../imgs/work4.jpg'
import work5 from '../imgs/work5.jpg'
import work6 from '../imgs/work6.jpg'
import work7 from '../imgs/work7.jpg'
import work8 from '../imgs/work8.jpg'
import work9 from '../imgs/work9.jpg'
import work10 from '../imgs/work10.jpg'
import work11 from '../imgs/work11.jpg'
import work12 from '../imgs/work12.jpg'



export default function About(props){
    let service=[
        'Terraces ', 
        'Pool',
        'Patios',
        'Walkways',
        'Brick Coping',
        'Stone  Walls',
        'Chimneys',
        'Fireplaces',
        'Columns',
        'Aprons',
        'Excavation',
        'Stucco Tile',
        'Stairs',     'Renovations ', 
        'Extensions',
        'Alterations',
        'Repairs',
        'New Construction',
        'Window & Replacements',
        'Door & Replacement',
        'Kitchen Remodeling',
        'Bathroom Remodeling',
        'Roofing',
        'Siding'

    ]
    
    let work=['work1','work2','work3','work4','work5','work6','work7','work8','work9','work10','work11']
    let renderImage=(option)=>{
        if (option === 'work1')return work1
        else if (option === 'work2')return work2
        else if(option==='work3')return work3
        else if(option==='work4')return work4
        else if(option==='work5')return work5
        else if(option==='work6')return work6
        else if(option==='work7')return work7
        else if(option==='work8')return work8
        else if(option==='work9')return work9
        else if(option==='work10')return work10
        else if(option==='work11')return work11
        else if(option==='work12')return work12


        else return null
    }
    return(
        <div id ='a-p'>
            <h2 id='call'>LICENSED & INSURED!</h2>

            <br/><br/><br/>
            <Container>
              
            <h1 className='title a-b'>Latest Works <i class="fas fa-tools"></i></h1><br/><br/>
            <Carousel>
          {work.map(option=>{
               return <Carousel.Item>
               <img
               className="d-block w-100"
               src={renderImage(option)}
               alt={option}
               />
   
               </Carousel.Item>

          })
           
}
           
            </Carousel>
            <h2 id='call'>CONTACT US TODAY! 123-600-6800</h2><br/><br/>
            <h1 className='title a-b'>Capentry and Masonary Services </h1><br/><br/>
            <ListGroup horizontal >
            <Row>
            {service.sort((a, b)=>b.length-a.length).map(service=>
            <Col md={4}>
            <ListGroup.Item  className='work-info list'variant='light' key={service}>
            {/* <i class="fas fa-hammer"></i>{' '} */}
            » {' '}{service}
            </ListGroup.Item>
            </Col>
            )}
            </Row>  
            </ListGroup><br/><br/>

            <Jumbotron className='work-info'>
                <Col xs >
                    <h1 className='title'id='ex '>20 Years experience <i class="fas fa-tools"></i></h1><br/>
                    <p id='about-p'>
                    Do you need repair or improvement work?  Medardo MJ Construction Corp. is a fully licensed and insured Home Improvement contractor and is here at your service. Medardo the owner of Medardo Construction Corp.
                    is an experienced and knowledgable carpenter and craftsman and has been in the
                    business of upgrading the homes of many families for years. He takes pride in
                    his work and it shows through the beautiful results he provide. With many years of experience
                    under the his belt he can help you complete major and minor projects and guarantee the quality
                    of his workmanship. Medardo Construction Corp. does capentry work and beautiful masonary 
                    Work, from installing new windows to replacing them, Whatever your project, he is ready to help. Call now to schedule an appointment and free estimate. We will
                    also answer any questions you may have about the work that is done and what to expect during your service appointment.
                    </p>
                    {/* Do you need repair or improvement work? I’ve got years of experience with Cabinet Installation, and guarantee the quality
                     of my workmanship. Whatever your project, I’m ready to help. Call me now to schedule an appointment and free estimate. I will
                      also answer any questions you may have about how I work and what to expect during your service appointment. */}
                </Col>
            </Jumbotron>
            </Container>
            <br/>
                
        </div>
    )
}