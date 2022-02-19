import React from 'react';
import {Container,Col,Row,Button} from 'react-bootstrap';
import CardBData from './CardBData';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CardB.css';


const CardB = () => {
  return (
    <div className="bg-light">
       <Container className="pt-4">
         <Row md={4} xs={1}>
            {
              CardBData.map((item)=>{
                return(
                  <>
                       <Col>
                            <div className="cards"> 
                                  <img src={item.img} alt="re" />
                                  <div className="text">
                                    <h5>{item.title}</h5>
                                    <span id="spanuse">{item.detals}</span>
                                      <div className="px-3 py-1">
                                        <b>4$</b>
                                        <span className='float-end'>
                                            <div className="d-flex">
                                                <div className="icon px-1"  id="Shoping1">
                                                      <AddShoppingCartIcon className='text-success pt-1'/>   
                                                </div>
                                                <div className="previceValue">
                                                <Button variant="outline-success" className='mx-1 p-0'>Preview</Button>
                                               
                                                </div>
                                            </div>
                                        </span>
                                      </div>
                                  </div>
                            </div>
                        </Col>
                  </>
                )
              })
            }
         </Row>
         <Col className="text-center pb-5">
            <Button variant="success" id="but1" className='px-5'>view more new item</Button> 
            </Col>
       </Container>
    </div>
  )
}

export default CardB;