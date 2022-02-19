import React, {useState} from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import CardData from './CardData';
import './Card.css';

const Card = () => {
    const [ShowCard, setShowCard] = useState(6);

    const loadMore = () =>{
        // setShowCard(ShowCard + ShowCard);
        let Val = ShowCard;

        if(Val === 6){
            setShowCard(ShowCard + ShowCard);
        }else{
            setShowCard(6);
        }
    }

    const slice =CardData.slice(0, ShowCard);    
  return (
    <div className='bg-light p-5' id="maincard">
        <Container >
            <Row>
               
                    {
                        slice.map((item, index)=>{
                            return(
                                <>
                                     <Col md={4} xs={12} lg={4} id="Card" key={index}>
                                            <div className="card pt-5 bg-light">
                                                    <div className="card-body">
                                                        <h3 className='card-Title pt-2 h3use'>{item.Title}</h3>
                                                        <h6 className='card-details pt-2'>{item.Details}</h6>
                                                        <div className="d-flex justify-content-center pt-1">
                                                        <a href="" className='ancae1'>{item.a1}</a>
                                                        <a href="" className='ancae1'>{item.a2}</a>
                                                        </div>
                                                       
                                                    </div>
                                                        <a href=""  className="img11 px-5">
                                                            <img src={item.img} alt="" />
                                                        </a>
                                                </div>
                                       </Col>
                                </>
                            )
                        })
                    }
            </Row>
            <Col className="text-center">
            <Button variant="success" id="but1" className='px-5' onClick={loadMore}>Read More</Button> 
            </Col>
        </Container>
    </div>
  )
}

export default Card;