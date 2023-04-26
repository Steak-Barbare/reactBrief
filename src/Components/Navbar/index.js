import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            Accueil
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
          <NavLink to="/Recettes" activeStyle>
            Recettes
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;