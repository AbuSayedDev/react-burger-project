import React from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

const Header = () => {
    return(
        <div>
            <Navbar style={{ backgroundColor: "#D70F64", height: "70px"}}>

                <NavbarBrand href="/" className="mr-auto ml-md-5">Brand</NavbarBrand>

                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink href="#">Something</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;