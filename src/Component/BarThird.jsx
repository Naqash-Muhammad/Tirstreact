import react from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
import './BarThird.css';
    const data =[
        {
            id : 0,
            Name : " wordpress",
        },
        {
            id : 1,
            Name : " Elementor",
        },
        {
            id : 2,
            Name : " hosting",
        },
        {
            id : 3,
            Name : " html",
        },
        {
            id : 4,
            Name : " Markenting",
        },
        {
            id : 5,
            Name : " CMS",
        },
        {
            id : 6,
            Name : " eCommercs",
        },
        {
            id : 7,
            Name : " UI Templates",
        },
        {
            id : 8,
            Name : " Plugins",
        },
        {
            id : 9,
            Name : "logo markers",
        },
        {
            id : 10,
            Name : "More",
        },
    ]

const AgainBar = () =>{

    

    return(
        <>
 <Navbar bg="light" classnName='border-bottom' expand="lg">
    <Container fluid className='px-5'>
        <Nav.Link className='text-dark'>All Item</Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-grow-1">
           <Nav.Link href="#home" className='kink'>
                {
                    data.map((item)=>{
                        return(
                            <>
                            <span className='Third' key={item.id}>{item.Name}</span></>
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