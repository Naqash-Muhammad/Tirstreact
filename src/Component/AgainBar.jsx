import react from 'react';
import {Navbar,Container,Nav,} from 'react-bootstrap';
import AgainBarData from './AgainBarData';
import './Againbar.css';



const AgainBar = () =>{

    return(
        <>
          <Navbar bg="dark" expand="lg" id="hidAgainBar">
            <Container fluid className='px-5'>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto flex-grow-1">
                        <Nav.Link href="#home" className='NavLINK text-white'>
                                      {
                              AgainBarData.map((item)=>{
                                return(
                                  <>
                                  <span className='Second' key={item.id}>{item.Name}</span>
                                  </>
                                )
                              })
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
         </Navbar>
        </>
    )
};
export default AgainBar;