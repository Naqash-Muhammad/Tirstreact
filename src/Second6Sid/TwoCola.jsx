import React from 'react';
import {Col,Row,Container,Button} from 'react-bootstrap'; 
import TwoColData from './TwoColData';
import "./TwoCol.css";

const TwoCola = () => {
  return (
    <>
       <Container fluid className="bg-light setting">
            <Row md={2}>
                 <Col md={6} className="bg-white p-3">
                    {
                                        TwoColData.map((item)=>{
                                            return(
                                                <>
                                                    <Col>
                                                        <a href="">
                                                            <img id="imgSec" src={item.img} alt="" />
                                                        </a>
                                                    </Col>
                                                </>
                                            )
                                        })
                                    }
                 </Col>
                 <Col md={6} className="p-5">
                     {
                         TwoColData.map((item)=>{
                             return(
                                 <>
                                        <h4 id="setText" className=''>{item.Title}</h4>
                                        
                                 </>
                             )
                         })
                     }
                     <Button variant="success"  className='px-5 mt-3'>Read More</Button>
                 </Col> 

            </Row>
       </Container>
    </>
  )
}

export default TwoCola;