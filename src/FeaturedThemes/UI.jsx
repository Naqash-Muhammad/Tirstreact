import React from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";
import UiCardData from './UiCardData';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './UI.css';

const UI = () => {
  return (
    <div>
        <Container fluid>
            <Row md={2} className='px-5 bg-light'>
                <Col md={4} id="Freture">
                    <h4>Featured themes</h4>
                    <p className='px-5'>Every week, our staff personally hand-pick some of the best new website themes from our collection.</p>
                    <Button variant="outline-success" className='mx-3'>View All Feature themes</Button>
                </Col>



                <Col md={8} id="smart">
                            {
                                UiCardData.map((items)=>{
                                    return(
                                        <>
                                            <Col md={6} xs={1} lg={2} id="CardUI">

                                                <div className="carD">
                                                   <a href="">
                                                      <img src={items.img} alt="" />
                                                   </a>
                                                        <div className="px-3 pt-4">
                                                            <h5 id="title">{items.Title}</h5>
                                                            <p>{items.Details}</p>
                                                                <span><b className='mt-5'>39$</b></span>
                                                                <span className='float-end'>
                                                                    <div className="d-flex">
                                                                        <div className="icon p-1"  id="Shoping1">
                                                                             <AddShoppingCartIcon className='text-success'/>   
                                                                        </div>
                                                                        <div className="previceValue">
                                                                        <Button variant="outline-success" className='mx-3'>Preview</Button>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                        </div>
                                                </div>
                                            </Col>
                                        </>
                                    )
                                })
                            }
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default UI;