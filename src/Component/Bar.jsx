import React from 'react';
import './Bar.css';
import {Navbar,Container,Nav,Button} from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DialpadIcon from '@material-ui/icons/Dialpad';
import SpaIcon from '@mui/icons-material/Spa';

const Bar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
              <Container fluid className='px-5'>
                       <Nav.Link href="#home">
                          <b className='text-white'> <SpaIcon/> envatomarket</b>
                        </Nav.Link>
                <Navbar.Toggle id="BarHide" aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                            <Nav  className='justify-content-end flex-grow-1'>
                              <Button variant="outline-success  text-white" className='mx-3'>Search ThemeForest <SearchIcon /></Button>
                              <Nav.Link href="#home" className='text-white'>Our Community</Nav.Link>
                              <Nav.Link href="#home" className='px-3 text-white'> <DialpadIcon /> Our Products</Nav.Link>
                              {/* <Nav.Link href="#home" id="BarHhow" className=' text-white'> <AddShoppingCartIcon /> Sign Up</Nav.Link> */}
                            </Nav>
               </Navbar.Collapse>
               <Nav.Link href="#home" id="BarHhow" className=' text-white'> <AddShoppingCartIcon /> Sign Up</Nav.Link>
              </Container>
            </Navbar>
        </div>
    )
};

export default Bar;
