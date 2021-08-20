import React from 'react';
import './Header.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import Logo from '../../assets/logo.png';

const Header = () => {
    return(
        <div className="Navigation">
            <Navbar style={{ backgroundColor: "#D70F64", height: "70px"}}>

                <NavbarBrand href="/" className="NavbarBrand mr-auto ml-md--5">
                    <img  src={Logo} alt="logo" width="100%"  height="50px"/>
                </NavbarBrand>

                <Nav className="Nav mr-md-5">
                    <NavItem>
                        <NavLink href="#" className="NavLink">Something</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;