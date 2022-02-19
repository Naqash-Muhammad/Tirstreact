import React, { useState } from 'react'
import {Row,Col, Container,Button} from "react-bootstrap";
import './SixBySix.css';
import SixBySixData from './SixBySixData';
import SmartButtonSharpIcon from '@mui/icons-material/SmartButtonSharp';

const SixBySix = () => {

    const [Data, setData] = useState(" ");
    const [DataFull, setDataFull] = useState(" ");

    const InputEvent = (event) =>{
        setData(event.target.value);
    }

    const onClick = () =>{
        setDataFull(Data);
            
    }
  return (
    <>
            <div className='bg-light'>
               <Container fluid>
                <Row>
                    <Col xs={12} md={6}>
                        {
                            SixBySixData.map((item)=>{
                                return(
                                    <div id="Sixby">
                                       <h4>{item.Title}</h4>
                                       <h6>{item.Info}</h6>
                                    </div>
                                )
                            })
                        }
                            
                        <label>
                        <input type="text"  placeholder='e.g responsive WordPress' onChange={InputEvent} value={Data}/>
                        <Button variant="outline-success" onClick={onClick}>Success</Button>
                        </label>               
                        <span id="DataFull">{DataFull}</span>

                    </Col>
                    <Col xs={12} md={6}>
                    {
                            SixBySixData.map((item)=>{
                                return(
                                    <div id="Siximg">
                                       <img src={item.img} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
               </Container>
               
            </div>
    </>
  )
}

export default SixBySix;