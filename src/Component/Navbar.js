import react from 'react';
import {NavDropdown,Nav,Container} from "react-bootstrap";

const Navbar = () =>{
        return(
            <>


             <NavDropdown title="Service in Multipul City" id="hihi">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
               <NavDropdown.Item href="#action/3.4">Separated link
            </NavDropdown.Item>
        </NavDropdown>
            </>
        )
}

export default Navbar;