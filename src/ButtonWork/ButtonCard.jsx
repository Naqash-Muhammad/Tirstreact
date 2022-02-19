import React from 'react';
import "./Buttons.css";
import {Button,Col,Row} from 'react-bootstrap';
import ButtonData from './ButtonData';
import { Link, Outlet} from 'react-router-dom';


const ButtonCard = () => {
  return (
    <div className='text-center bg-light'  id="Car">
        <h4>Check out our newest themes and templates</h4>
        <p className='px-5'>We carefully review new entries from our community one by one to make sure they
           meet high-quality design and functionality standards. From multipurpose themes to 
           niche templates, you’ll always find something that catches your eye.
        </p>


        
        {
          ButtonData.map((Items, index)=>{
              return(
                <>
                 {/* <Button variant="whit" id="butCard" className='px-5 bg-white'>{Items.text}</Button> */}
                 <Link to="/hideCard" id="butCard" className='px-5 py-1 bg-white'>{Items.text}</Link>
                <Row  className='text-start mt-4' id="Links" md={7}>
                  <Col>
                      {/* <Link to="/hideCard" >{Items.text}</Link>
                      <Link index id="butCard" className='px-5 py-1 bg-white'>{Items.text}</Link> */}   
                      {/* <Link to="/" id="butCard" className='px-5 py-1 bg-white'>{Items.text}</Link> 
                      <Link to="/hideCard">{Items.text1}</Link>               */}
                  </Col>
                </Row>
              
                                 
                </>
              )
          })
        }
                      {/* <nav>
                         <ul>
                           <li><Link to="/">All Categories</Link></li>
                           <li><Link to="/hideCard">site template</Link></li>
                           <li><Link index>k,bj </Link>card</li>
                         </ul>
                       </nav> */}
                       <Outlet />
                       
    </div>
  )
}

export default ButtonCard;